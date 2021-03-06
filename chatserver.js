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
		if (users[username] === undefined && username.toLowerCase() != "server" && (username.toLowerCase().replace(" ", "").match(/^[0-9a-z]+$/)) && username.toLowerCase().replace(" ", "") != "you" && username.length < 21) {
			socket.username = username;
			//Store user object in global user roster.
			users[username] = { username: socket.username, channels: {}, socket: this };
			fn(true); // Callback, user name was available
            var globalUsers = [];
            for(var user in users){
                globalUsers.push(user);
            }
            //Returns all connected users.
            io.sockets.emit('globalUsers', globalUsers); //The other method was not working as well as expected, so globalUsers was created to fill its place.
            io.sockets.emit('updateusers', 'lobby', rooms['lobby'].users, rooms['lobby'].ops, rooms['lobby'].banned);
		}
		else {
			fn(false); // Callback, it wasn't available
		}
	});

	//When a user joins a room this processes the request.
	socket.on('joinroom', function (joinObj, fn) {
		var room = joinObj.room;
		var pass = joinObj.pass;
		var accepted = true;
		var reason;

		// If the room does not exist
		if(rooms[room] === undefined) {
			rooms[room] = new Room();
			if(joinObj.topic !== ""){
                rooms[room].topic = joinObj.topic;
            }
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
            rooms[room].addUser(socket.username);
			io.sockets.emit("roomlist", rooms);
			io.sockets.emit('updateusers', room, rooms[room].users, rooms[room].ops, rooms[room].banned);
            var messageObj = {
                nick : 'Server',
                timestamp :  new Date(),
                message : 'This room was created by: '+ socket.username
            };
            rooms[room].addMessage(messageObj);
            for(var user in rooms[room].users){
                users[user].socket.emit('updatechat', room, rooms[room].topic, rooms[room].messageHistory);
            }

			// Update topic
			socket.emit('updatetopic', room, rooms[room].topic, socket.username);
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
				//Keep track of the room in the user object.
				users[socket.username].channels[room] = room;

                rooms[room].addUser(socket.username);

                io.sockets.emit('updateusers', room, rooms[room].users, rooms[room].ops, rooms[room].banned);
				socket.emit('updatetopic', room, rooms[room].topic, socket.username);
                for(var user in rooms[room].users){
                    if (user !== socket.username) {
                        users[user].socket.emit('serverAnnouncement', new ServerAnnouncement(socket.username, room, 'join'));
                    }
                    users[user].socket.emit('updatechat', room, rooms[room].topic, rooms[room].messageHistory);
                }
			}
			if (fn) {
			    if(!accepted){
                    users[socket.username].socket.emit('serverAnnouncement', new ServerAnnouncement(socket.username, room, reason));
                }
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
			//Testing this
			for(var user in rooms[data.roomName].users){
                users[user].socket.emit('updatechat', data.roomName, rooms[data.roomName].topic, rooms[data.roomName].messageHistory);
            }
		}
	});

	socket.on('privatemsg', function (msgObj, fn) {
		//If user exists in global user list.
		if(users[msgObj.nick] !== undefined) {
			//Send the message only to this user.
			users[msgObj.nick].socket.emit('recvPrivateMsg', socket.username, msgObj.msg);
			//Callback recieves true.
			fn(true);
		}
		fn(false);
		//Comment
	});

	//When a user leaves a room this gets performed.
	socket.on('partroom', function (room) {
		//remove the user from the room roster and room op roster.
		delete rooms[room].users[socket.username];
		delete rooms[room].ops[socket.username];
		//Remove the channel from the user object in the global user roster.
		delete users[socket.username].channels[room];
		//Update the userlist in the room.
        console.log("leaving"+ room);
        for(var user in rooms[room].users){
            users[user].socket.emit('serverAnnouncement', new ServerAnnouncement(socket.username, room, 'leave'));
        }
		io.sockets.emit('updateusers', room, rooms[room].users, rooms[room].ops, rooms[room].banned);
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
				io.sockets.emit('updateusers', room, rooms[room].users, rooms[room].ops, rooms[room].banned);
                for(var user in rooms[room].users){
                    users[user].socket.emit('serverAnnouncement', new ServerAnnouncement(socket.username, room, 'leave'));
                }
			}
			//Remove the user from the global user roster.
			delete users[socket.username];

			//Reconstructing globalUsers
            var globalUsers = [];
            for(var user in users){
                globalUsers.push(user);
            }
            io.sockets.emit('globalUsers', globalUsers);
		}
	});

	//When a user tries to kick another user this gets performed.
	socket.on('kick', function (kickObj, fn) {

		if(rooms[kickObj.room].ops[socket.username] !== undefined) {
			//Remove the user from the room roster.
			delete rooms[kickObj.room].users[kickObj.user];
            users[kickObj.user].socket.emit('serverAnnouncement', new ServerAnnouncement(kickObj.user, kickObj.room, "self-kick"));
			//Update user list for room.
			io.sockets.emit('updateusers', kickObj.room, rooms[kickObj.room].users, rooms[kickObj.room].ops, rooms[kickObj.room].banned);
            for(var user in rooms[kickObj.room].users){
                users[user].socket.emit('serverAnnouncement', new ServerAnnouncement(kickObj.user, kickObj.room, "kick"));
            }
			fn(true);
		}
		else {
			fn(false); // Send back failed, debugging..
		}
	});

	//When a user tries to op another user this gets performed.
	socket.on('op', function (opObj, fn) {
		if(rooms[opObj.room].ops[socket.username] !== undefined) {
			//Op the user.
			rooms[opObj.room].ops[opObj.user] = opObj.user;
			//Update user list for room.
			io.sockets.emit('updateusers', opObj.room, rooms[opObj.room].users, rooms[opObj.room].ops, rooms[opObj.room].banned);
            for(var user in rooms[opObj.room].users){
                users[user].socket.emit('serverAnnouncement', new ServerAnnouncement(opObj.user, opObj.room, "op"));
            }
			fn(true);
		}
		else {
			fn(false); // Send back failed, debugging..
		}
	});

		//When a user tries to deop another user this gets performed.
	socket.on('deop', function (deopObj, fn) {
		//If user is OP
		if(rooms[deopObj.room].ops[socket.username] !== undefined) {
			//Remove the user from the room op roster.
			delete rooms[deopObj.room].ops[deopObj.user];
			//Update user list for room.
			io.sockets.emit('updateusers', deopObj.room, rooms[deopObj.room].users, rooms[deopObj.room].ops, rooms[deopObj.room].banned);
            for(var user in rooms[deopObj.room].users){
                users[user].socket.emit('serverAnnouncement', new ServerAnnouncement(deopObj.user, deopObj.room, "deOp"));
            }
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
			io.sockets.emit('updateusers', banObj.room, rooms[banObj.room].users, rooms[banObj.room].ops, rooms[banObj.room].banned);
            users[banObj.user].socket.emit('serverAnnouncement', new ServerAnnouncement(banObj.user, banObj.room, "self-ban"));
            for(var user in rooms[banObj.room].users){
                users[user].socket.emit('serverAnnouncement', new ServerAnnouncement(banObj.user, banObj.room, "ban"));
            }
			fn(true);
		}
		fn(false);
	});

	//Handles unbanning the user.
	socket.on('unban', function (unbanObj, fn) {
		if(rooms[unbanObj.room].ops[socket.username] !== undefined) {
			//Remove the user from the room ban list.
			delete rooms[unbanObj.room].banned[unbanObj.user];
            io.sockets.emit('updateusers', unbanObj.room, rooms[unbanObj.room].users, rooms[unbanObj.room].ops, rooms[unbanObj.room].banned);
            users[unbanObj.user].socket.emit('serverAnnouncement', new ServerAnnouncement(unbanObj.user ,unbanObj.room, "unBan"));
            for(var user in rooms[unbanObj.room].users){
                users[user].socket.emit('serverAnnouncement', new ServerAnnouncement(unbanObj.user, unbanObj.room, "unBan"));
            }
			fn(true);
		}
		fn(false);
	});

	//Returns a list of all avaliable rooms.
	socket.on('rooms', function() {
		socket.emit('roomlist', rooms);
	});

});

// Define the ServerAnnouncement class, we user this to display some of the server messages for the user.
function ServerAnnouncement(user, room, reason) {
    this.room = room;
    this.msg = {
        nick : 'Server',
        timestamp :  new Date(),
        message :''
    };
    this.reason = reason;

    switch (reason){
        case 'join':
            this.msg.message = user + ' joined room: '+ room;
            break;
        case 'leave':
            this.msg.message = user + 'left from room: '+ room;
            break;
        case 'ban':
            this.msg.message = user + ' is now banned from '+ room;
            break;
        case 'self-ban':
            this.msg.message = 'You have been banned from '+ room;
            break;
        case 'unBan':
            this.msg.message = user + ' is no longer banned from '+ room;
            break;
        case 'self-kick':
            this.msg.message = 'You have been kicked from '+ room;
            break;
        case 'kick':
            this.msg.message = user +' was kicked from '+ room;
            break;
        case 'op':
            this.msg.message = user +' just became an admin of '+ room;
            break;
        case 'deOp':
            this.msg.message = user + '\'s admin rights of '+ room + ' has been terminated.';
            break;
        case 'wrong password':
            this.msg.message = 'You entered wrong password for ' + room;
            break;
        case 'banned':
            this.msg.message = 'Sorry you are banned from this room: ' + room;
            break;
    }
}

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