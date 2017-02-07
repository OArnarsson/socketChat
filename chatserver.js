var express = require('express'), 
app = express(), 
http = require('http'), 
server = http.createServer(app),
io = require('socket.io').listen(server);

server.listen(8080);
console.log("Server up and running, listening on port 8080");

//Store room in an object.
var rooms = {};
//Global user object, since we want to know what rooms each user is in etc.
var users = {};

//Default room.
rooms.lobby = new Room();
rooms.lobby.setTopic("Welcome to the lobby!");

io.sockets.on('connection', function (socket) {

	//This gets performed when a user joins the server.
	socket.on('adduser', function(username, fn){

		//Check if username is avaliable.
		if (users[username] === undefined && username.toLowerCase != "server" && username.length < 21) {
			socket.username = username;

			//Store user object in global user roster.
			users[username] = { username: socket.username, channels: {}, socket: this };
			console.log("User added: " + username);
			fn(true); // Callback, user name was available
		}
		else {
			console.log("User " + username + " already present!");
			fn(false); // Callback, it wasn't available
		}
	});

	//When a user joins a room this processes the request.
	socket.on('joinroom', function (joinObj, fn) {
		console.log("Attempting to join a room");
		console.log(joinObj);

		var room = joinObj.room;
		var pass = joinObj.pass;
		var accepted = true;
		var reason;

		// If the room does not exist
		if(rooms[room] === undefined) {
			rooms[room] = new Room();
			// Op the user if he creates the room.
			rooms[room].ops[socket.username] = socket.username;
			// If the user wants to password protect the room we set the password.
			if(pass !== undefined) {
				rooms[room].setPassword(pass);
			}
			// Keep track of the room in the user object.
			users[socket.username].channels[room] = room;
			// Send the room information to the client.
			if (fn) {
				fn(true);
			}
			io.sockets.emit("roomlist", rooms);
			io.sockets.emit('updateusers', room, rooms[room].users, rooms[room].ops);
			// Update topic
			socket.emit('updatetopic', room, rooms[room].topic, socket.username);
			io.sockets.emit('servermessage', "join", room, socket.username);
		}
		else {

			//If the room isn't locked we set accepted to true.
			if(rooms[room].locked === false) {
				accepted = true;
			}
			//Check if user submits the correct password
			else {
				//If it doesnt match we set accepted to false.
				if(pass != rooms[room].password) {
					accepted = false;
					reason = "wrong password";
				}
			}

			//Check if the user has been added to the ban list.
			if(rooms[room].banned[socket.username] !== undefined) {
				accepted = false;
				reason = "banned";
			}
			//If accepted is set to true at this point the user is allowed to join the room.
			if(accepted) {
				//We need to let the server know beforehand so that he starts to prepare the client template.
				if (fn) {
					fn(true);
				}
				//Add user to room.
				rooms[room].addUser(socket.username);
				//Keep track of the room in the user object.
				users[socket.username].channels[room] = room;
				//Send the room information to the client.
				io.sockets.emit('updateusers', room, rooms[room].users, rooms[room].ops);
				socket.emit('updatechat', room, rooms[room].messageHistory);
				socket.emit('updatetopic', room, rooms[room].topic, socket.username);
				io.sockets.emit('servermessage', "join", room, socket.username);
			}
			if (fn) {
				fn(false, reason);
			}
		}
	});

	// when the client emits 'sendchat', this listens and executes
	socket.on('sendmsg', function (data) {
		
		var userAllowed = false;

		//Check if user is allowed to send message.
		if(rooms[data.roomName].users[socket.username] !== undefined) {
			userAllowed = true;
		}
		if(rooms[data.roomName].ops[socket.username] !== undefined) {
			userAllowed = true;
		}

		if(userAllowed) {
			//Update the message history for the room that the user sent the message to.
			var messageObj = {
				nick : socket.username,
				timestamp :  new Date(),
				message : data.msg.substring(0, 200)
			};
			rooms[data.roomName].addMessage(messageObj);
			io.sockets.emit('updatechat', data.roomName, rooms[data.roomName].messageHistory);
		}
	});

	socket.on('privatemsg', function (msgObj, fn) {

		//If user exists in global user list.
		if(users[msgObj.nick] !== undefined) {
			//Send the message only to this user.
			users[msgObj.nick].socket.emit('recv_privatemsg', socket.username, msgObj.message);
			//Callback recieves true.
			fn(true);
		}
		fn(false);
	});

	//When a user leaves a room this gets performed.
	socket.on('partroom', function (room) {
		//remove the user from the room roster and room op roster.
		delete rooms[room].users[socket.username];
		delete rooms[room].ops[socket.username];
		//Remove the channel from the user object in the global user roster.
		delete users[socket.username].channels[room];
		//Update the userlist in the room.
		io.sockets.emit('updateusers', room, rooms[room].users, rooms[room].ops);
		io.sockets.emit('servermessage', "part", room, socket.username);
	});

	// when the user disconnects.. perform this
	socket.on('disconnect', function(){
		if(socket.username) {
			//If the socket doesn't have a username the client joined and parted without
			//chosing a username, so we just close the socket without any cleanup.
			for(var room in users[socket.username].channels) {
				//Remove the user from users/ops lists in the rooms he's currently in.
				delete rooms[room].users[socket.username];
				delete rooms[room].ops[socket.username];
				io.sockets.emit('updateusers', room, rooms[room].users, rooms[room].ops);
			}

			//Broadcast the the user has left the channels he was in.
			io.sockets.emit('servermessage', "quit", users[socket.username].channels, socket.username);
			//Remove the user from the global user roster.
			delete users[socket.username];
		}
	});

	//When a user tries to kick another user this gets performed.
	socket.on('kick', function (kickObj, fn) {
		console.log(socket.username + " kicked " + kickObj.user + " from " + kickObj.room);

		if(rooms[kickObj.room].ops[socket.username] !== undefined) {
			//Remove the user from the room roster.
			delete rooms[kickObj.room].users[kickObj.user];
			//Remove the user from the ops roster.
			delete rooms[kickObj.room].ops[kickObj.user];
			//Broadcast to the room who got kicked.
			io.sockets.emit('kicked', kickObj.room, kickObj.user, socket.username);
			//Update user list for room.
			io.sockets.emit('updateusers', kickObj.room, rooms[kickObj.room].users, rooms[kickObj.room].ops);
			fn(true);
		}
		else {
			fn(false); // Send back failed, debugging..
		}
	});

	//When a user tries to op another user this gets performed.
	socket.on('op', function (opObj, fn) {
		console.log(socket.username + " opped " + opObj.user + " from " + opObj.room);
		if(rooms[opObj.room].ops[socket.username] !== undefined) {
			//Remove the user from the room roster.
			delete rooms[opObj.room].users[opObj.user];
			//Op the user.
			rooms[opObj.room].ops[opObj.user] = opObj.user;
			//Broadcast to the room who got opped.
			io.sockets.emit('opped', opObj.room, opObj.user, socket.username);
			//Update user list for room.
			io.sockets.emit('updateusers', opObj.room, rooms[opObj.room].users, rooms[opObj.room].ops);
			fn(true);
		}
		else {
			fn(false); // Send back failed, debugging..
		}
	});

		//When a user tries to deop another user this gets performed.
	socket.on('deop', function (deopObj, fn) {
		console.log(socket.username + " deopped " + deopObj.user + " from " + deopObj.room);
		//If user is OP
		if(rooms[deopObj.room].ops[socket.username] !== undefined) {
			//Remove the user from the room op roster.
			delete rooms[deopObj.room].ops[deopObj.user];
			//Add the user to the room roster.
			rooms[deopObj.room].users[deopObj.user] = deopObj.user;
			//Broadcast to the room who got opped.
			io.sockets.emit('deopped', deopObj.room, deopObj.user, socket.username);
			//Update user list for room.
			io.sockets.emit('updateusers', deopObj.room, rooms[deopObj.room].users, rooms[deopObj.room].ops);
			fn(true);
		}
		else {
			fn(false); // Send back failed, debugging..
		}
	});

	//Handles banning the user from a room.
	socket.on('ban', function (banObj, fn) {
		if(rooms[banObj.room].ops[socket.username] !== undefined) {
			//Remove the channel from the user in the global user roster.
			delete users[banObj.user].channels[banObj.room];
			//Add the user to the ban list and remove him from the room user roster.
			rooms[banObj.room].banUser(banObj.user);
			//Kick the user from the room.
			io.sockets.emit('banned', banObj.room, banObj.user, socket.username);
			io.sockets.emit('updateusers', banObj.room, rooms[banObj.room].users, rooms[banObj.room].ops);
			fn(true);
		}
		fn(false);
	});

	//Handles unbanning the user.
	socket.on('unban', function (unbanObj, fn) {
		if(rooms[unbanObj.room].ops[socket.username] !== undefined) {
			//Remove the user from the room ban list.
			delete rooms[unbanObj.room].banned[unbanObj.user];
			fn(true);
		}
		fn(false);
	});

	//Returns a list of all avaliable rooms.
	socket.on('rooms', function() {
		console.log("Requesting a list of rooms");
		socket.emit('roomlist', rooms);
	});

	//Returns a list of all connected users.
	socket.on('users', function() {
		var userlist = [];

		//We need to construct the list since the users in the global user roster have a reference to socket, which has a reference
		//back to users so the JSON serializer can't serialize them.
		for(var user in users) {
			userlist.push(user);
		}
		socket.emit('userlist', userlist);
	});

	//Sets topic for room.
	socket.on('settopic', function (topicObj, fn) {
		//If user is OP
		if(rooms[topicObj.room].ops[socket.username] !== undefined) {
			rooms[topicObj.room].setTopic(topicObj.topic);
			//Broadcast to room that the user changed the topic.
			io.sockets.emit('updatetopic', topicObj.room, topicObj.topic, socket.username);
			fn(true);
		}
		//Return false if topic was not set.
		fn(false);
	});

	//Password locks the room.
	socket.on('setpassword', function (passwordObj, fn) {

		//If user is OP
		if(rooms[passwordObj.room].ops[socket.username] !== undefined) {
			rooms[passwordObj.room].setPassword(passwordObj.password);
			fn(true);
		}
		fn(false);
	});

	//Unlocks the room.
	socket.on('removepassword', function (remObj, fn) {
		if(rooms[remObj.room].ops[socket.username] !== undefined) {
			rooms[remObj.room].clearPassword();
			fn(true);
		}
		fn(false);
	});
});

//Define the Room class/object.
function Room() {
	this.users = {},
	this.ops = {},
	this.banned = {},
	this.messageHistory = [],
	this.topic = "No topic has been set for room..",
	this.locked = false,
	this.password = "",

	this.addUser = function(user) {
		(user !== undefined) ? this.users[user] = user : console.log("ERROR: add user");
	};
	this.banUser = function(user) {
		(user !== undefined) ? this.banned[user] = user : console.log("ERROR: ban user 1");
		(this.users[user] == user) ? delete this.users[user] : console.log("ERROR: ban user 2");
	};
	this.addMessage = function(message) {
		(message !== undefined) ? this.messageHistory.push(message) : console.log("ERROR: add message");
	};
	this.setTopic = function(topic) {
		(topic !== undefined) ? this.topic = topic : console.log("ERROR: set topic");
	};
	this.setPassword = function(pass) {
		(pass !== undefined) ? this.password = pass : console.log("ERROR: set pass");
		this.locked = true;
	};
	this.clearPassword = function() {
		this.password = "";
		this.locked = false;
	};
}