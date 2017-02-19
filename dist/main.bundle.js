webpackJsonp([1,4],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedRoomObj; });
var SharedRoomObj = (function () {
    function SharedRoomObj(room, topic, username, privateMsg) {
        this.room = room;
        this.topic = topic;
        this.username = username;
        this.privateMsg = privateMsg;
    }
    return SharedRoomObj;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/shared-room-obj.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chatroom; });
var Chatroom = (function () {
    function Chatroom(name, messages) {
        this.name = name;
        this.history = messages;
        this.unreadMessages = 0;
        this.roomClass = '';
    }
    return Chatroom;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/chatroom.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(nick, time, message, privateMsg) {
        this.nick = nick;
        this.timeStamp = time;
        this.message = message;
        this.privateMsg = privateMsg;
    }
    return Message;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/message.js.map

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 372;


/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(482);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/main.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(668),
            styles: [__webpack_require__(662)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/app.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__currentchat_currentchat_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chatdetails_chatdetails_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chatpicker_chatpicker_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_chat_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_initials_pipe__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_namecolor_pipe__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_toasty__ = __webpack_require__(357);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__currentchat_currentchat_component__["a" /* CurrentchatComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chatdetails_chatdetails_component__["a" /* ChatdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chatpicker_chatpicker_component__["a" /* ChatpickerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_initials_pipe__["a" /* InitialsPipe */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_namecolor_pipe__["a" /* NamecolorPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng2_toasty__["a" /* ToastyModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_11__pipes_initials_pipe__["a" /* InitialsPipe */], __WEBPACK_IMPORTED_MODULE_12__pipes_namecolor_pipe__["a" /* NamecolorPipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/app.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatdetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatdetailsComponent = (function () {
    function ChatdetailsComponent(chat) {
        this.chat = chat;
        this.setToPrivate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    ChatdetailsComponent.prototype.ngOnInit = function () {
        this.roomDetails = [];
        this.globalUsers = [];
        this.onlineState = 'inactive';
        this.roomState = 'active';
        this.getGlobalUsers();
        this.getUsers();
    };
    ChatdetailsComponent.prototype.getUsers = function () {
        var _this = this;
        this.chat.getAllUsers().subscribe(function (roomDetails) {
            var found = false;
            for (var index in _this.roomDetails) {
                if (index in _this.roomDetails) {
                    if (_this.roomDetails[index].room === roomDetails.room) {
                        _this.roomDetails[index] = roomDetails;
                        found = true;
                    }
                }
            }
            if (!found) {
                _this.roomDetails.push(roomDetails);
            }
        });
    };
    ChatdetailsComponent.prototype.getActiveDetails = function () {
        var UserArr = [];
        var isAdmin = false;
        for (var _i = 0, _a = this.roomDetails; _i < _a.length; _i++) {
            var detail = _a[_i];
            if (detail.room === this.whereAmI) {
                // User list for normal user
                UserArr = detail.users;
                // We add banned users to the list for admins.
                if (detail.ops.indexOf(this.whoAmI) > -1) {
                    isAdmin = true;
                }
            }
        }
        if (isAdmin) {
            UserArr = this.getBannedUsers(UserArr);
        }
        return UserArr;
    };
    ChatdetailsComponent.prototype.getBannedUsers = function (UserArr) {
        var allUsers = UserArr;
        var bannedUsers;
        for (var _i = 0, _a = this.roomDetails; _i < _a.length; _i++) {
            var detail = _a[_i];
            if (detail.room === this.whereAmI) {
                bannedUsers = detail.banned;
            }
        }
        ;
        return allUsers.concat(bannedUsers);
    };
    ChatdetailsComponent.prototype.getUserName = function (user) {
        if (user === this.whoAmI) {
            return 'You';
        }
        return user;
    };
    ChatdetailsComponent.prototype.getGlobalUsers = function () {
        var _this = this;
        this.chat.getGlobalUsers().subscribe(function (userList) {
            _this.globalUsers = userList;
            // this.globalUsers.splice(this.globalUsers.indexOf(this.whoAmI), 1);
        });
    };
    ChatdetailsComponent.prototype.getFontAwesomeClass = function (action, userName) {
        var className = '';
        switch (action) {
            case 'admin':
                if (this.isAdmin(userName)) {
                    className = 'fa fa-user-times';
                }
                else {
                    className = 'fa fa-user-o';
                }
                break;
            case 'ban':
                if (this.isBanned(userName)) {
                    className = 'fa fa-circle-o';
                }
                else {
                    className = 'fa fa-ban';
                }
                break;
        }
        return className;
    };
    ChatdetailsComponent.prototype.getspanDescription = function (action, userName) {
        var description = '';
        switch (action) {
            case 'admin':
                if (this.isAdmin(userName)) {
                    description = 'DeOp User';
                }
                else {
                    description = 'Op User';
                }
                break;
            case 'ban':
                if (this.isBanned(userName)) {
                    description = 'Unban';
                }
                else {
                    description = 'Ban';
                }
                break;
        }
        return description;
    };
    ChatdetailsComponent.prototype.toggleDropDown = function (menu) {
        if (menu === 'online') {
            if (this.onlineState === 'active') {
                this.onlineState = 'inactive';
            }
            else {
                this.onlineState = 'active';
            }
        }
        if (menu === 'room') {
            if (this.roomState === 'active') {
                this.roomState = 'inactive';
            }
            else {
                this.roomState = 'active';
            }
        }
    };
    ChatdetailsComponent.prototype.isBanned = function (userName) {
        for (var _i = 0, _a = this.roomDetails; _i < _a.length; _i++) {
            var detail = _a[_i];
            if (detail.room === this.whereAmI && detail.banned.indexOf(userName) > -1) {
                return true;
            }
        }
        return false;
    };
    ChatdetailsComponent.prototype.isAdmin = function (userName) {
        for (var _i = 0, _a = this.roomDetails; _i < _a.length; _i++) {
            var detail = _a[_i];
            if (detail.room === this.whereAmI && detail.ops.indexOf(userName) > -1) {
                return true;
            }
        }
        return false;
    };
    ChatdetailsComponent.prototype.isAdminAndNotMe = function (user) {
        return (this.isAdmin(this.whoAmI) && user !== this.whoAmI);
    };
    ChatdetailsComponent.prototype.isMyself = function (userName) {
        return userName === this.whoAmI;
    };
    ChatdetailsComponent.prototype.goToPrivate = function (userName) {
        this.setToPrivate.emit(userName);
    };
    ChatdetailsComponent.prototype.kickUser = function (userName) {
        this.chat.kickUser({ room: this.whereAmI, user: userName });
    };
    ChatdetailsComponent.prototype.toggleOpUser = function (userName) {
        if (this.isAdmin(userName)) {
            this.chat.deOpUser({ room: this.whereAmI, user: userName });
        }
        else {
            this.chat.opUser({ room: this.whereAmI, user: userName });
        }
    };
    ChatdetailsComponent.prototype.toggleBanUser = function (userName) {
        if (this.isBanned(userName)) {
            this.chat.unBanUser({ room: this.whereAmI, user: userName });
        }
        else {
            this.chat.banUser({ room: this.whereAmI, user: userName });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(), 
        __metadata('design:type', String)
    ], ChatdetailsComponent.prototype, "whereAmI", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(), 
        __metadata('design:type', String)
    ], ChatdetailsComponent.prototype, "whoAmI", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])(), 
        __metadata('design:type', Object)
    ], ChatdetailsComponent.prototype, "setToPrivate", void 0);
    ChatdetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-chatdetails',
            template: __webpack_require__(669),
            styles: [__webpack_require__(663)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* trigger */])('onlineToggle', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        transform: 'translateX(0%)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        transform: 'translateX(100%)',
                        display: 'none'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('300ms ease')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('300ms ease'))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* trigger */])('roomToggle', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        transform: 'translateX(0%)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        transform: 'translateX(100%)',
                        display: 'none'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('300ms ease')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('300ms ease'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === 'function' && _a) || Object])
    ], ChatdetailsComponent);
    return ChatdetailsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/chatdetails.component.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_shared_room_obj__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatpickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatpickerComponent = (function () {
    function ChatpickerComponent(chat) {
        this.chat = chat;
        this.setActiveRoom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.availableRooms = [];
        this.getAllRooms();
        this.modalState = 'inactive';
        this.availableState = 'active';
    }
    ChatpickerComponent.prototype.ngOnInit = function () {
    };
    ChatpickerComponent.prototype.getAllRooms = function () {
        var _this = this;
        this.chat.getAllRooms().subscribe(function (rooms) { return _this.availableRooms = rooms; });
    };
    ChatpickerComponent.prototype.toggleDropDown = function (menu) {
        if (menu === 'all') {
            if (this.availableState === 'active') {
                this.availableState = 'inactive';
            }
            else {
                this.availableState = 'active';
            }
        }
        if (menu === 'modal') {
            if (this.modalState === 'active') {
                this.modalState = 'inactive';
            }
            else {
                this.modalState = 'active';
            }
        }
    };
    ChatpickerComponent.prototype.newRoom = function () {
        this.changeRoom({ room: this.newName, topic: this.newTopic });
        this.newName = '';
        this.newTopic = '';
        this.modalState = 'inactive';
    };
    ChatpickerComponent.prototype.changeRoom = function (x) {
        var _this = this;
        this.chat.changeRoom(x).subscribe(function (data) {
            if (data['data']) {
                _this.setActiveRoom.emit(new __WEBPACK_IMPORTED_MODULE_2__classes_shared_room_obj__["a" /* SharedRoomObj */](x.room, x.topic, _this.activeObj.username, false));
            }
            // data['reason'] is a type string, we can display for the user if password is need or, user is banned etc.
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__classes_shared_room_obj__["a" /* SharedRoomObj */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__classes_shared_room_obj__["a" /* SharedRoomObj */]) === 'function' && _a) || Object)
    ], ChatpickerComponent.prototype, "activeObj", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])(), 
        __metadata('design:type', Object)
    ], ChatpickerComponent.prototype, "setActiveRoom", void 0);
    ChatpickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-chatpicker',
            template: __webpack_require__(670),
            styles: [__webpack_require__(664)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* trigger */])('availableToggle', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        transform: 'translateX(0%)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        transform: 'translateX(-100%)',
                        display: 'none'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('300ms ease')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('300ms ease'))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* trigger */])('modalToggle', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        transform: 'translateY(0%)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        transform: 'translateY(-100%)',
                        display: 'none'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('550ms ease')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('550ms ease')),
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === 'function' && _b) || Object])
    ], ChatpickerComponent);
    return ChatpickerComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/chatpicker.component.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roomdetails; });
var Roomdetails = (function () {
    function Roomdetails(room, users, ops, banned) {
        this.room = room;
        this.users = users;
        this.ops = ops;
        this.banned = banned;
    }
    return Roomdetails;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/roomdetails.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_chatroom__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_message__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_shared_room_obj__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__ = __webpack_require__(357);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentchatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CurrentchatComponent = (function () {
    function CurrentchatComponent(chat, toastyService, toastyConfig) {
        this.chat = chat;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.setActiveRoom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.message = '';
        this.getMessages();
        this.getPrivateMessages();
        this.getServerAnnouncement();
        this.chatRooms = [];
        this.privateConv = [];
        this.toastyConfig.theme = 'material';
    }
    CurrentchatComponent.prototype.ngOnInit = function () {
    };
    CurrentchatComponent.prototype.sendMsg = function (event) {
        if (event.keyCode === 13 || event === 'sendButton') {
            if (!this.activeObj.privateMsg) {
                this.chat.sendMessage({ roomName: this.activeObj.room, msg: this.message });
            }
            else {
                var found = false;
                for (var index in this.privateConv) {
                    if (index in this.privateConv) {
                        if (this.privateConv[index].name === this.activeObj.room) {
                            this.privateConv[index].history.push(new __WEBPACK_IMPORTED_MODULE_3__classes_message__["a" /* Message */](this.activeObj.username, new Date(), this.message, true));
                            found = true;
                        }
                    }
                }
                if (!found) {
                    var msgArr = [];
                    msgArr.push(new __WEBPACK_IMPORTED_MODULE_3__classes_message__["a" /* Message */](this.activeObj.username, new Date(), this.message, true));
                    this.privateConv.push(new __WEBPACK_IMPORTED_MODULE_2__classes_chatroom__["a" /* Chatroom */](this.activeObj.room, msgArr));
                }
                this.chat.sendPrivateMessage({ nick: this.activeObj.room, msg: this.message });
            }
            this.message = '';
        }
    };
    CurrentchatComponent.prototype.getMessages = function () {
        var _this = this;
        this.chat.getMessages().subscribe(function (chatRoom) {
            var isNew = true;
            for (var index in _this.chatRooms) {
                if (_this.chatRooms[index].name === chatRoom['name']) {
                    // This need some more work.
                    if (_this.chatRooms[index].name !== _this.activeObj.room) {
                        if (_this.chatRooms[index].history.length < chatRoom['history'].length) {
                            _this.chatRooms[index].roomClass = 'unreadMsg';
                            _this.chatRooms[index].unreadMessages += 1;
                        }
                    }
                    _this.chatRooms[index].history = chatRoom['history'];
                    isNew = false;
                }
            }
            if (isNew) {
                _this.chatRooms.push(chatRoom);
            }
        });
    };
    CurrentchatComponent.prototype.getPrivateMessages = function () {
        var _this = this;
        this.chat.getPrivateMessages().subscribe(function (message) {
            var found = false;
            for (var index = 0; index < _this.privateConv.length; index += 1) {
                if (_this.privateConv[index].name === message.nick) {
                    _this.privateConv[index].history.push(message);
                    _this.privateConv[index].unreadMessages += 1;
                    _this.privateConv[index].roomClass = 'unreadMsg';
                    found = true;
                }
            }
            if (!found) {
                var msgArr = [];
                msgArr.push(message);
                var newPrivateConv = new __WEBPACK_IMPORTED_MODULE_2__classes_chatroom__["a" /* Chatroom */](message.nick, msgArr);
                newPrivateConv.unreadMessages += 1;
                newPrivateConv.roomClass = 'unreadMsg';
                _this.privateConv.push(newPrivateConv);
            }
        });
    };
    CurrentchatComponent.prototype.getUnreadMessages = function () {
        var size = 0;
        var found = false;
        for (var _i = 0, _a = this.chatRooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.name === this.activeObj.room) {
                found = true;
                size = room.history.length - room.unreadMessages;
            }
        }
        if (!found) {
            for (var _b = 0, _c = this.privateConv; _b < _c.length; _b++) {
                var room = _c[_b];
                if (room.name === this.activeObj.room) {
                    size = room.history.length - room.unreadMessages;
                }
            }
        }
        return size;
    };
    CurrentchatComponent.prototype.getActiveRoomChat = function () {
        if (this.findActiveRoom() !== null) {
            return this.findActiveRoom().history;
        }
        return [];
    };
    CurrentchatComponent.prototype.findActiveRoom = function () {
        if (!this.activeObj.privateMsg) {
            for (var index = 0; index < this.chatRooms.length; index += 1) {
                if (this.chatRooms[index].name === this.activeObj.room) {
                    return this.chatRooms[index];
                }
            }
        }
        else {
            for (var index = 0; index < this.privateConv.length; index += 1) {
                if (this.privateConv[index].name === this.activeObj.room) {
                    return this.privateConv[index];
                }
            }
        }
        return null;
    };
    CurrentchatComponent.prototype.resetRoomUnreadMsg = function () {
        var active = this.findActiveRoom();
        if (active !== null) {
            setTimeout(function () {
                active.unreadMessages = 0;
                active.roomClass = '';
            }, 1250);
        }
    };
    CurrentchatComponent.prototype.changeRoom = function (convo) {
        var newObj = new __WEBPACK_IMPORTED_MODULE_4__classes_shared_room_obj__["a" /* SharedRoomObj */](convo.name, 'missing from ChatRoom class', this.activeObj.username, false);
        if (convo.history.length > 0) {
            if (convo.history[0].privateMsg) {
                newObj.privateMsg = true;
                newObj.topic = 'Private Message';
            }
        }
        // ToDo: Now we need to be able to retrieve topic from the room.
        this.setActiveRoom.emit(newObj);
        // this.chat.changeRoom(x);
    };
    CurrentchatComponent.prototype.isActive = function (x) {
        return x === this.activeObj.room;
    };
    CurrentchatComponent.prototype.getUserName = function (userName) {
        if (userName === this.activeObj.username) {
            return 'You';
        }
        return userName;
    };
    CurrentchatComponent.prototype.isMyself = function (userName) {
        return userName === this.activeObj.username;
    };
    CurrentchatComponent.prototype.leaveRoom = function (convo) {
        this.searchAndDestroy(convo.name); // Here we remove the conversation/chatRoom for local array.
        if (!convo.history[0].privateMsg) {
            this.chat.leaveRoom(convo.name); // If and only if its a chat room we leave from the room on the server.
        }
    };
    CurrentchatComponent.prototype.getOpenConversations = function () {
        var combined = [];
        for (var _i = 0, _a = this.chatRooms; _i < _a.length; _i++) {
            var room = _a[_i];
            combined.push(room);
        }
        ;
        for (var _b = 0, _c = this.privateConv; _b < _c.length; _b++) {
            var priv = _c[_b];
            combined.push(priv);
        }
        ;
        return combined;
    };
    CurrentchatComponent.prototype.searchAndDestroy = function (roomName) {
        for (var index = 0; index < this.chatRooms.length; index += 1) {
            if (this.chatRooms[index].name === roomName) {
                this.chatRooms.splice(index, 1);
                break;
            }
            ;
        }
        for (var index = 0; index < this.privateConv.length; index += 1) {
            if (this.privateConv[index].name === roomName) {
                this.privateConv.splice(index, 1);
                break;
            }
            ;
        }
        if (this.getOpenConversations().length > 0 && roomName === this.activeObj.room) {
            this.changeRoom(this.getOpenConversations()[this.getOpenConversations().length - 1]);
        }
    };
    CurrentchatComponent.prototype.getServerAnnouncement = function () {
        var _this = this;
        this.chat.getServerAnnouncement().subscribe(function (Announcement) {
            switch (Announcement.reason) {
                case 'kick':
                    // Anounce message for the user
                    _this.searchAndDestroy(Announcement.room);
                    _this.addToast('o shii', Announcement);
                    break;
                case 'ban':
                    // Anounce message for the user
                    _this.searchAndDestroy(Announcement.room);
                    _this.addToast('O shii...', Announcement);
                    break;
                case 'unBan':
                    _this.addToast('Congratz!', Announcement);
                    break;
                case 'op':
                    _this.addToast('Congratz!', Announcement);
                    break;
                case 'deOp':
                    _this.addToast('O shii...', Announcement);
                    break;
                case 'wrong password':
                    _this.addToast('Damn...', Announcement);
                    break;
                case 'banned':
                    _this.addToast('To bad...', Announcement);
                    break;
            }
        });
    };
    // Toast service functions
    // For information about how this toast works:  https://github.com/akserg/ng2-toasty
    CurrentchatComponent.prototype.addToast = function (title, announcement) {
        var toastOptions = {
            title: title,
            msg: announcement.msg.message,
            showClose: true,
            timeout: 5000,
            theme: 'material',
            onAdd: function (toast) { },
            onRemove: function (toast) { }
        };
        // Add see all possible types in one shot
        switch (announcement.reason) {
            case 'kick':
                this.toastyService.warning(toastOptions);
                break;
            case 'ban':
                this.toastyService.warning(toastOptions);
                break;
            case 'unBan':
                this.toastyService.success(toastOptions);
                break;
            case 'op':
                this.toastyService.success(toastOptions);
                break;
            case 'deOp':
                this.toastyService.warning(toastOptions);
                break;
            case 'wrong password':
                this.toastyService.warning(toastOptions);
                break;
            case 'banned':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__classes_shared_room_obj__["a" /* SharedRoomObj */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__classes_shared_room_obj__["a" /* SharedRoomObj */]) === 'function' && _a) || Object)
    ], CurrentchatComponent.prototype, "activeObj", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])(), 
        __metadata('design:type', Object)
    ], CurrentchatComponent.prototype, "setActiveRoom", void 0);
    CurrentchatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-currentchat',
            template: __webpack_require__(671),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["b" /* ToastyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["b" /* ToastyService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["c" /* ToastyConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["c" /* ToastyConfig */]) === 'function' && _d) || Object])
    ], CurrentchatComponent);
    return CurrentchatComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/currentchat.component.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(chat) {
        this.chat = chat;
        this.attemptToLogIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userName = '';
    };
    LoginComponent.prototype.getKeyEv = function (ev) {
        if (ev.keyCode === 13) {
            this.logIn();
        }
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.chat.logIn(this.userName).subscribe(function (data) {
            if (data) {
                _this.isAvailable = true;
                _this.attemptToLogIn.emit(_this.userName);
                _this.joinRoom();
            }
            else {
                _this.userName = '';
                _this.isAvailable = false;
            }
        });
    };
    LoginComponent.prototype.joinRoom = function () {
        this.chat.joinRoom({ room: 'lobby' });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], LoginComponent.prototype, "isAvailable", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])(), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "attemptToLogIn", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(672),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/login.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_shared_room_obj__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(chat) {
        this.chat = chat;
        this.loggedIn = false;
        this.userNameAvailable = true;
        this.roomObj = new __WEBPACK_IMPORTED_MODULE_2__classes_shared_room_obj__["a" /* SharedRoomObj */]('lobby', '', '', false);
        this.loginState = 'active';
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.logIn = function (name) {
        this.roomObj.username = name;
        this.loggedIn = true;
        this.loginState = 'inactive';
        this.getCurrentRoom();
    };
    MainComponent.prototype.getCurrentRoom = function () {
        var _this = this;
        this.chat.getRoomTopic().subscribe(function (room) {
            _this.roomObj = room;
        });
    };
    MainComponent.prototype.setViewToPrivateMsg = function (userName) {
        if (userName !== this.roomObj.username) {
            this.roomObj.room = userName;
            this.roomObj.topic = 'private Msg';
            this.roomObj.privateMsg = true;
        }
    };
    MainComponent.prototype.changeConvo = function (roomObj) {
        this.roomObj = roomObj;
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__(673),
            styles: [__webpack_require__(667)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* trigger */])('loginTrigger', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        transform: 'translateY(-100%)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('750ms ease'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === 'function' && _a) || Object])
    ], MainComponent);
    return MainComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/main.component.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialsPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InitialsPipe = (function () {
    function InitialsPipe() {
    }
    InitialsPipe.prototype.transform = function (value, args) {
        if (value.split(' ').length > 1) {
            var x = value.split(' ');
            var string = x[0].charAt(0) + x[1].charAt(0);
            return string.toUpperCase();
        }
        return value.replace(' ', '').charAt(0).toUpperCase();
    };
    InitialsPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Pipe */])({
            name: 'initials'
        }), 
        __metadata('design:paramtypes', [])
    ], InitialsPipe);
    return InitialsPipe;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/initials.pipe.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamecolorPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NamecolorPipe = (function () {
    function NamecolorPipe() {
    }
    NamecolorPipe.prototype.transform = function (value, args) {
        var first = this.getRandomArbitrary(value.charCodeAt(0) - 93);
        var middle = this.getRandomArbitrary(value.length + 5);
        var last = this.getRandomArbitrary(value.charCodeAt(value.length - 1) - 99);
        var rgba = 'rgba(' + first + ',' + middle + ',' + last + ', 0.5)';
        return rgba;
    };
    NamecolorPipe.prototype.getRandomArbitrary = function (value) {
        return value * 9;
    };
    NamecolorPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Pipe */])({
            name: 'namecolor'
        }), 
        __metadata('design:paramtypes', [])
    ], NamecolorPipe);
    return NamecolorPipe;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/namecolor.pipe.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/environment.js.map

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = "#chatDetails {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: #FDFDFD;\n  border-left: 1.25px solid #DADADA; }\n  #chatDetails .toggler {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  #chatDetails h3 {\n    width: 100%;\n    margin: 3% 5%;\n    color: #333;\n    opacity: 0.7;\n    cursor: pointer;\n    transition: all ease-in-out 0.2s;\n    -webkit-transition: all ease-in-out 0.2s;\n    -moz-transition: all ease-in-out 0.2s; }\n    #chatDetails h3:hover {\n      transition: all ease-in-out 0.2s;\n      -webkit-transition: all ease-in-out 0.2s;\n      -moz-transition: all ease-in-out 0.2s;\n      color: #753a88;\n      opacity: 1; }\n  #chatDetails .nobody {\n    text-align: center;\n    padding: 15px 0;\n    font-size: 1.5em; }\n  #chatDetails .userTab {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 15px 0; }\n    #chatDetails .userTab:hover {\n      background: #DADADA; }\n    #chatDetails .userTab .userName {\n      -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n              flex-grow: 2;\n      color: #333;\n      opacity: 0.9;\n      font-size: 1.5rem;\n      font-weight: bold; }\n    #chatDetails .userTab i {\n      padding: 0px 15px;\n      font-size: 16px; }\n      #chatDetails .userTab i:hover {\n        color: #753a88;\n        cursor: pointer; }\n    #chatDetails .userTab.bannedUser {\n      background-color: rgba(255, 39, 35, 0.76); }\n  #chatDetails .actionButtons {\n    width: 100%;\n    padding: 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    font-size: 16px; }\n    #chatDetails .actionButtons i {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center; }\n      #chatDetails .actionButtons i .tooltip {\n        visibility: hidden;\n        position: absolute;\n        width: 75px;\n        padding: 5px;\n        text-align: center;\n        color: #FFF;\n        background-color: rgba(0, 0, 0, 0.8);\n        border-radius: 4px;\n        -webkit-transform: translateY(-43px) translateX(-35px);\n                transform: translateY(-43px) translateX(-35px);\n        font-family: 'Josefin Sans', sans-serif; }\n      #chatDetails .actionButtons i:hover {\n        color: #ed1960;\n        cursor: pointer; }\n        #chatDetails .actionButtons i:hover .tooltip {\n          visibility: visible; }\n      #chatDetails .actionButtons i.noHover:hover {\n        color: #000;\n        cursor: default; }\n"

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "#chatPicker {\n  width: 100%;\n  height: 100%;\n  background-color: #FDFDFD; }\n  #chatPicker h3 {\n    width: 100%;\n    margin: 3% 5%;\n    color: #333;\n    opacity: 0.7;\n    cursor: pointer;\n    transition: all ease-in-out 0.2s;\n    -webkit-transition: all ease-in-out 0.2s;\n    -moz-transition: all ease-in-out 0.2s; }\n    #chatPicker h3:hover {\n      transition: all ease-in-out 0.2s;\n      -webkit-transition: all ease-in-out 0.2s;\n      -moz-transition: all ease-in-out 0.2s;\n      color: #753a88;\n      opacity: 1; }\n  #chatPicker .room {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    #chatPicker .room:hover {\n      background: #DADADA; }\n      #chatPicker .room:hover i.exit {\n        color: #FFF; }\n    #chatPicker .room.button {\n      padding: 15px 0;\n      cursor: pointer; }\n    #chatPicker .room .joinRoom {\n      padding: 15px 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n              flex-grow: 2;\n      cursor: pointer; }\n    #chatPicker .room .roomName {\n      color: #333;\n      opacity: 0.9;\n      font-size: 1.5rem;\n      font-weight: bold;\n      -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n              flex-grow: 2; }\n    #chatPicker .room i {\n      padding: 0 15px 0 17.5px;\n      font-size: 30px;\n      color: #753a88; }\n      #chatPicker .room i.exit {\n        cursor: pointer;\n        font-size: 15px;\n        color: #DADADA; }\n        #chatPicker .room i.exit:hover {\n          color: #753a88; }\n\n.modalContainer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%); }\n  .modalContainer .flexRow {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .modalContainer .flexRow .flexCol {\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      .modalContainer .flexRow .flexCol .modal {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        text-align: center;\n        width: 500px;\n        height: 300px;\n        background-color: #753a88;\n        border-radius: 4px;\n        padding: 25px; }\n        .modalContainer .flexRow .flexCol .modal .flexRow {\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          height: auto; }\n          .modalContainer .flexRow .flexCol .modal .flexRow h3 {\n            font-size: 2.5em;\n            color: #FFF;\n            margin-bottom: 30px; }\n        .modalContainer .flexRow .flexCol .modal i {\n          font-size: 15px;\n          height: 15px;\n          color: #DADADA; }\n          .modalContainer .flexRow .flexCol .modal i:hover {\n            cursor: pointer;\n            color: #ed1960; }\n        .modalContainer .flexRow .flexCol .modal input {\n          font-size: 14px;\n          padding: 7.5px 5px; }\n          .modalContainer .flexRow .flexCol .modal input:nth-of-type(2) {\n            margin-top: -30px; }\n        .modalContainer .flexRow .flexCol .modal .button {\n          font-size: 1.5em;\n          border-radius: 4px;\n          padding: 5px 0;\n          color: #FFF;\n          background-color: #ed1960;\n          transition: all ease-in-out 0.2s;\n          -webkit-transition: all ease-in-out 0.2s;\n          -moz-transition: all ease-in-out 0.2s; }\n          .modalContainer .flexRow .flexCol .modal .button:hover {\n            cursor: pointer;\n            background-color: #ff2ca8;\n            transition: all ease-in-out 0.2s;\n            -webkit-transition: all ease-in-out 0.2s;\n            -moz-transition: all ease-in-out 0.2s; }\n"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n#currentChat {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  font-family: 'Source Sans Pro', sans-serif;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  #currentChat .openConvContainer {\n    background: #FFF;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    border-bottom: 1.25px solid #DADADA;\n    cursor: default;\n    height: 90px;\n    padding: 0% 10px;\n    border-left: 1.25px solid #DADADA; }\n    #currentChat .openConvContainer .bubbleContainer {\n      margin-left: 15px; }\n    #currentChat .openConvContainer .weirdActiveBorder {\n      display: none; }\n    #currentChat .openConvContainer i.bubbleExit {\n      cursor: pointer;\n      position: absolute;\n      -webkit-transform: translateY(-4px) translateX(34px);\n              transform: translateY(-4px) translateX(34px);\n      font-size: 20px; }\n      #currentChat .openConvContainer i.bubbleExit:hover {\n        color: #ed1960; }\n    #currentChat .openConvContainer .activeChat .chatBubble {\n      background-color: #dddddd; }\n    #currentChat .openConvContainer .activeChat .weirdActiveBorder {\n      display: block;\n      position: absolute;\n      background-color: transparent;\n      border-radius: 0%;\n      -webkit-transform: translateY(0px) translateX(13.5px);\n              transform: translateY(0px) translateX(13.5px);\n      width: 0;\n      height: 0;\n      border-left: 13px solid transparent;\n      border-right: 13px solid transparent;\n      border-bottom: 14px solid #d8d8d8; }\n    #currentChat .openConvContainer .chatBubble {\n      background-color: #FFF;\n      cursor: pointer;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      border-left: 1px solid #AAA;\n      border-right: 1px solid #AAA;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: start;\n          align-content: flex-start;\n      border-radius: 50%;\n      width: 50px;\n      height: 50px; }\n      #currentChat .openConvContainer .chatBubble.unreadMsg {\n        -webkit-animation: unreadMessage 2s cubic-bezier(0.4, 0, 1, 1) infinite;\n                animation: unreadMessage 2s cubic-bezier(0.4, 0, 1, 1) infinite; }\n      #currentChat .openConvContainer .chatBubble h4 {\n        cursor: pointer;\n        width: 100%;\n        text-align: center; }\n      #currentChat .openConvContainer .chatBubble span {\n        background: #ef035b;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        border-radius: 45%;\n        -ms-flex-item-align: center;\n            align-self: center;\n        font-size: 15px;\n        width: 22px;\n        height: 22px;\n        position: absolute;\n        color: #ffffff;\n        -webkit-transform: translateY(-60%) translateX(-70%);\n        transform: translateY(70%) translateX(-25%); }\n  #currentChat .mainChat {\n    height: 100%;\n    width: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    overflow-y: auto;\n    overflow-x: hidden;\n    background-color: #FFF;\n    font-size: 15px;\n    color: #000;\n    border-left: 1.25px solid #DADADA; }\n    #currentChat .mainChat .unread {\n      background-color: #FFF;\n      -webkit-animation: deGreen 1.5s linear;\n              animation: deGreen 1.5s linear; }\n\n@-webkit-keyframes deGreen {\n  0% {\n    background: lightgreen; }\n  100% {\n    background: #FFF; } }\n\n@keyframes deGreen {\n  0% {\n    background: lightgreen; }\n  100% {\n    background: #FFF; } }\n    #currentChat .mainChat .message {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-top: 0.4em;\n      padding: 10px 1.5% 10px 1.5%; }\n      #currentChat .mainChat .message div:nth-of-type(1) {\n        margin-right: 1.5%; }\n      #currentChat .mainChat .message div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        width: 100%; }\n      #currentChat .mainChat .message div .avatar {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n      #currentChat .mainChat .message .messageUser {\n        line-height: 1;\n        padding-bottom: 4px;\n        opacity: 0.7;\n        color: #333;\n        font-size: 1.05rem; }\n      #currentChat .mainChat .message .messageTime {\n        color: #AAA; }\n      #currentChat .mainChat .message .messageStamp {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; }\n      #currentChat .mainChat .message div {\n        display: inline-block; }\n    #currentChat .mainChat .ownMessage {\n      float: right; }\n  #currentChat .inputContainer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 5%; }\n    @media screen and (max-width: 740px) {\n      #currentChat .inputContainer {\n        position: fixed;\n        bottom: 0; } }\n    #currentChat .inputContainer input {\n      width: 90%;\n      margin: 0;\n      padding: 0 0.5%;\n      border: 1.25px solid #DADADA; }\n      #currentChat .inputContainer input:focus {\n        outline: none; }\n    #currentChat .inputContainer div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      width: 10%;\n      height: 100%;\n      padding: 0;\n      margin: 0;\n      text-align: center;\n      cursor: pointer;\n      color: #DADADA;\n      background-image: -webkit-linear-gradient(left, #cc2b5e, #753a88);\n      background-image: linear-gradient(to right, #cc2b5e, #753a88);\n      opacity: 0.95;\n      transition: all ease-in-out 0.2s;\n      -webkit-transition: all ease-in-out 0.2s;\n      -moz-transition: all ease-in-out 0.2s; }\n      #currentChat .inputContainer div:hover {\n        color: #FFF;\n        opacity: 1;\n        transition: all ease-in-out 0.2s;\n        -webkit-transition: all ease-in-out 0.2s;\n        -moz-transition: all ease-in-out 0.2s; }\n\n@-webkit-keyframes unreadMessage {\n  0% {\n    background-color: #ffffff; }\n  50% {\n    background-color: rgba(255, 19, 203, 0.32); }\n  100% {\n    background-color: #ffffff; } }\n\n@keyframes unreadMessage {\n  0% {\n    background-color: #ffffff; }\n  50% {\n    background-color: rgba(255, 19, 203, 0.32); }\n  100% {\n    background-color: #ffffff; } }\n"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = ".flexContainer {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-image: -webkit-linear-gradient(right, #cc2b5e, #753a88);\n  background-image: linear-gradient(to left, #cc2b5e, #753a88); }\n  .flexContainer .loginButton {\n    width: 25%;\n    height: 50px;\n    margin-top: 20px;\n    cursor: pointer;\n    border-radius: 4px;\n    border: 2px solid #ed1960;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #FFF;\n    font-size: 1.5em; }\n    @media screen and (max-width: 1000px) {\n      .flexContainer .loginButton {\n        width: 50%; } }\n    .flexContainer .loginButton:hover {\n      background: #ed1960; }\n\n#name {\n  width: 25%;\n  text-align: center;\n  font-size: 5em;\n  background: none;\n  border: none;\n  border-bottom: 3px solid #ed1960;\n  color: #FFF;\n  opacity: 0.9; }\n  @media screen and (max-width: 1000px) {\n    #name {\n      width: 50%;\n      font-size: 2.5em; } }\n  #name:focus, #name:active {\n    outline: none;\n    border: none;\n    border-bottom: 3px solid #ed1960; }\n"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%; }\n\n#nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 6%;\n  width: 100%;\n  text-align: center;\n  background-image: -webkit-linear-gradient(right, #cc2b5e, #753a88);\n  background-image: linear-gradient(to left, #cc2b5e, #753a88); }\n  @media screen and (max-width: 740px) {\n    #nav {\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; } }\n  #nav div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n    #nav div:nth-of-type(4) {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n    #nav div img {\n      margin: 0 2%; }\n  #nav .navLeft {\n    width: 15%;\n    margin-left: 17.5px; }\n    @media screen and (max-width: 740px) {\n      #nav .navLeft {\n        display: none; } }\n    #nav .navLeft .brand {\n      font-size: 1.5em;\n      color: #BBB;\n      opacity: 0.75; }\n  #nav .navCenter {\n    width: 70%; }\n    @media screen and (max-width: 740px) {\n      #nav .navCenter {\n        width: auto; } }\n    #nav .navCenter h2, #nav .navCenter h4 {\n      margin-left: 5px 10px;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      font-size: 1.75em;\n      color: #DDD; }\n      @media screen and (max-width: 740px) {\n        #nav .navCenter h2, #nav .navCenter h4 {\n          font-size: 1.75em; } }\n    #nav .navCenter h4 {\n      opacity: 0.7; }\n  #nav .navRight {\n    width: 15%;\n    text-align: right; }\n    @media screen and (max-width: 740px) {\n      #nav .navRight {\n        display: none; } }\n    #nav .navRight .profile {\n      font-size: 1.5rem;\n      color: #DDD;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center; }\n    #nav .navRight img {\n      border-radius: 4px; }\n  #nav .navButton {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 40px;\n    cursor: pointer;\n    font-size: 1.3em;\n    text-align: center;\n    color: #FFF;\n    background-color: transparent;\n    transition: all ease-in-out 0.2s;\n    -webkit-transition: all ease-in-out 0.2s;\n    -moz-transition: all ease-in-out 0.2s; }\n    @media screen and (min-width: 740px) {\n      #nav .navButton {\n        display: none; } }\n    #nav .navButton:hover {\n      transition: all ease-in-out 0.2s;\n      -webkit-transition: all ease-in-out 0.2s;\n      -moz-transition: all ease-in-out 0.2s;\n      color: lightgreen; }\n\n#content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 94%;\n  background-color: #FFF5F5; }\n\napp-chatPicker {\n  width: 15%;\n  height: 100%; }\n  @media screen and (max-width: 740px) {\n    app-chatPicker {\n      display: none; } }\n\napp-currentChat {\n  width: 70%;\n  height: 100%; }\n  @media screen and (max-width: 740px) {\n    app-currentChat {\n      width: 100%; } }\n\napp-chatDetails {\n  width: 15%;\n  height: 100%; }\n  @media screen and (max-width: 740px) {\n    app-chatDetails {\n      display: none; } }\n\napp-login {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 99; }\n\n.fullScreen {\n  height: 100%;\n  width: 100%; }\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<div id=\"chatDetails\">\r\n  <div class=\"user\">\r\n    <h3 (click)=\"toggleDropDown('room')\">Users in {{whereAmI}}: {{getActiveDetails().length}}</h3>\r\n    <div class=\"toggler\" [@roomToggle]=\"roomState\">\r\n      <div *ngFor=\"let user of getActiveDetails()\" class=\"userTab\" (click)=\"toggleDropDown()\" [ngClass]=\"{bannedUser: isBanned(user)}\">\r\n        <div class=\"avatar\" [ngStyle]=\"{'background-color':user | namecolor}\">{{user | initials}}</div>\r\n        <div class=\"userName\">{{getUserName(user)}}</div>\r\n        <i *ngIf=\"isAdmin(user)\" class=\"fa fa-trophy noHover\" aria-hidden=\"true\"></i>\r\n        <div *ngIf=\"isAdminAndNotMe(user)\" class=\"actionButtons\">\r\n            <i *ngIf=\"!isBanned(user)\" (click)=\"toggleOpUser(user)\" class=\"{{getFontAwesomeClass('admin', user)}}\" aria-hidden=\"true\">\r\n              <span class=\"tooltip\">{{getspanDescription('admin', user)}}</span>\r\n            </i>\r\n            <i *ngIf=\"!isBanned(user)\" (click)=\"kickUser(user)\" class=\"fa fa-trash-o\" aria-hidden=\"true\">\r\n                <span class=\"tooltip\">Kick</span>\r\n            </i>\r\n            <h2 *ngIf=\"isBanned(user)\">Is Banned!</h2>\r\n            <i (click)=\"toggleBanUser(user)\" class=\"{{getFontAwesomeClass('ban', user)}}\" aria-hidden=\"true\">\r\n                <span class=\"tooltip\">{{getspanDescription('ban', user)}}</span>\r\n            </i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"user\">\r\n    <h3 (click)=\"toggleDropDown('online')\">All users: {{globalUsers.length}}</h3>\r\n    <div class=\"toggler\" [@onlineToggle]=\"onlineState\">\r\n      <div *ngFor=\"let user of globalUsers\" class=\"userTab\" (click)=\"goToPrivate(user)\">\r\n        <div class=\"avatar\" [ngStyle]=\"{'background-color':user | namecolor}\">{{user | initials}}</div>\r\n        <div class=\"userName\">{{getUserName(user)}}</div>\r\n        <i *ngIf=\"!isMyself(user)\" (click)=\"goToPrivate(user)\" class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>\r\n        <i *ngIf=\"isMyself(user)\" class=\"fa fa-user-circle-o noHover\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <div *ngIf=\"globalUsers.length < 1\" class=\"nobody\">\r\n        <div>No other users online.</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<div id=\"chatPicker\">\r\n  <div (click)=\"toggleDropDown('modal')\" class=\"room button\">\r\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n    <div class=\"roomName\">New room</div>\r\n  </div>\r\n\r\n  <h3 (click)=\"toggleDropDown('all')\">All rooms</h3>\r\n  <div class=\"toggler\" [@availableToggle]=\"availableState\">\r\n    <div class=\"room\" *ngFor=\"let room of availableRooms\">\r\n      <div class=\"joinRoom\" (click)=\"changeRoom({room: room})\">\r\n        <div *ngIf=\"room != 'lobby'\" class=\"avatar\" [ngStyle]=\"{'background-color':room | namecolor}\">{{room | initials}}</div>\r\n        <i *ngIf=\"room == 'lobby'\" class=\"fa fa-home\" aria-hidden=\"true\"></i>\r\n        <div class=\"roomName\">{{room}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div [@modalToggle]=\"modalState\" class=\"modalContainer\">\r\n  <div class=\"flexRow\">\r\n    <div class=\"flexCol\">\r\n      <div class=\"modal\">\r\n        <div class=\"flexRow\">\r\n          <h3>Create a room</h3> <i (click)=\"toggleDropDown('modal')\" class=\"fa fa-times exit\" aria-hidden=\"true\"></i></div>\r\n        <input type=\"text\" name=\"roomName\" autofocus placeholder=\"Name\" [(ngModel)]=\"newName\">\r\n        <input type=\"text\" name=\"roomTopic\" placeholder=\"Topic\" [(ngModel)]=\"newTopic\">\r\n        <div (click)=\"newRoom()\" class=\"button\">CREATE</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div id=\"currentChat\">\r\n  <div class=\"openConvContainer\">\r\n      <div *ngFor=\"let conversation of getOpenConversations()\" [ngClass]=\"{'activeChat': isActive(conversation.name)}\" class=\"bubbleContainer\">\r\n          <i (click)=\"leaveRoom(conversation)\" class=\"fa fa-times exit bubbleExit\" aria-hidden=\"true\"></i>\r\n          <div class=\"{{conversation.roomClass}} chatBubble\" (click)=\"changeRoom(conversation)\">\r\n              <span *ngIf=\"conversation.unreadMessages > 0\">{{conversation.unreadMessages}}</span><h4>{{conversation.name | initials}}</h4>\r\n          </div>\r\n          <div class=\"weirdActiveBorder\"></div>\r\n      </div>\r\n    </div>\r\n  <div class=\"mainChat\" (mouseenter)=\"resetRoomUnreadMsg()\">\r\n    <div class=\"message\" *ngFor=\"let msgObj of getActiveRoomChat(); let indx = index\" [ngClass]=\"{'unread': getUnreadMessages() <= indx}\" >\r\n      <div>\r\n        <div class=\"avatar\" [ngStyle]=\"{'background-color':msgObj.nick | namecolor}\">{{msgObj.nick | initials}}</div>\r\n      </div>\r\n      <div>\r\n        <div class=\"messageUser\">{{getUserName(msgObj.nick)}}</div>\r\n        <div class=\"messageText\">{{msgObj.message}}</div>\r\n      </div>\r\n      <div class=\"messageTime\">{{msgObj.timeStamp | date:'hh:mm'}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"inputContainer\">\r\n    <input [(ngModel)]=\"message\" name=\"message\" autofocus placeholder=\"Type a message..\" (keyup)=\"sendMsg($event)\">\r\n    <div (click)=\"sendMsg('sendButton')\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i></div>\r\n  </div>\r\n</div>\r\n\r\n<ng2-toasty></ng2-toasty>"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"flexContainer\">\r\n    <input input id=\"name\" type=\"text\" [(ngModel)]=\"userName\" (keyup)=\"getKeyEv($event)\">\r\n    <div class=\"loginButton\" (click)=\"logIn()\">Login</div>\r\n    <div *ngIf=\"!isAvailable\">That username is taken!</div>\r\n</div>"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div *ngIf=\"loggedIn\" id=\"nav\">\r\n        <div class=\"navButton\">\r\n            <p><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></p>\r\n        </div>\r\n        <div class=\"navLeft\">\r\n            <h1 class=\"brand\">OnRi Chat</h1>\r\n        </div>\r\n        <div class=\"navCenter\">\r\n            <div class=\"avatar\" [ngStyle]=\"{'background-color':roomObj.room | namecolor}\">{{roomObj.room | initials}}</div>\r\n            <h2 class=\"roomName\">{{roomObj.room}} &nbsp;</h2>\r\n            <h4>- {{roomObj.topic}}</h4>\r\n        </div>\r\n        <div class=\"navRight\">\r\n            <h2 class=\"profile\">{{roomObj.username}}</h2>\r\n            <div class=\"avatar\" [ngStyle]=\"{'background-color':roomObj.username | namecolor}\">{{roomObj.username | initials}}</div>\r\n        </div>\r\n        <div class=\"navButton\">\r\n            <p><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></p>\r\n        </div>\r\n    </div>\r\n\r\n    <app-login [@loginTrigger]=\"loginState\" [(isAvailable)]=\"userNameAvailable\" (attemptToLogIn)=\"logIn($event)\"></app-login>\r\n    <div id=\"content\" *ngIf=\"loggedIn\">\r\n        <app-chatpicker (setActiveRoom)=\"changeConvo($event)\" [(activeObj)]=\"roomObj\"></app-chatpicker>\r\n        <app-currentchat [(activeObj)]=\"roomObj\" (setActiveRoom)=\"changeConvo($event)\"></app-currentchat>\r\n        <app-chatdetails (setToPrivate)=\"setViewToPrivateMsg($event)\" [whoAmI]=\"roomObj.username\" [whereAmI]=\"roomObj.room\"></app-chatdetails>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(373);


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_message__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_chatroom__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_shared_room_obj__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_roomdetails__ = __webpack_require__(485);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatService = (function () {
    // Room variables
    function ChatService() {
        this.url = 'localhost:8080/';
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
        this.socket.on('connect', function () {
            console.log('Connected!');
        });
    }
    ChatService.prototype.logIn = function (userName) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.emit('adduser', userName, function (data) {
                observer.next(data);
                observer.complete();
            });
        });
        return observable;
    };
    ChatService.prototype.sendMessage = function (msg) {
        this.socket.emit('sendmsg', msg);
    };
    ChatService.prototype.sendPrivateMessage = function (msg) {
        this.socket.emit('privatemsg', msg, function (data) { });
    };
    ChatService.prototype.getPrivateMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('recvPrivateMsg', function (userName, msgObj) {
                observer.next(new __WEBPACK_IMPORTED_MODULE_3__classes_message__["a" /* Message */](userName, new Date(), msgObj, true));
            });
        });
        return observable;
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('updatechat', function (room, history) {
                var msgHistory = [];
                for (var _i = 0, history_1 = history; _i < history_1.length; _i++) {
                    var msg = history_1[_i];
                    msgHistory.push(new __WEBPACK_IMPORTED_MODULE_3__classes_message__["a" /* Message */](msg['nick'], msg['timestamp'], msg['message'], false));
                }
                ;
                observer.next(new __WEBPACK_IMPORTED_MODULE_4__classes_chatroom__["a" /* Chatroom */](room, msgHistory));
            });
        });
        return observable;
    };
    ChatService.prototype.joinRoom = function (room) {
        this.socket.emit('joinroom', room);
    };
    ChatService.prototype.getAllRooms = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.emit('rooms');
            _this.socket.on('roomlist', function (roomList) {
                var RoomArr = [];
                for (var room in roomList) {
                    if (room in roomList) {
                        RoomArr.push(room);
                    }
                }
                ;
                observer.next(RoomArr);
            });
        });
        return observable;
    };
    ChatService.prototype.getGlobalUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('globalUsers', function (users) {
                observer.next(users);
            });
        });
        return observable;
    };
    ChatService.prototype.getAllUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('updateusers', function (room, userList, opsList, bannedList) {
                var userArr = [];
                for (var user in userList) {
                    if (user in userList) {
                        userArr.push(user);
                    }
                }
                ;
                var opsArr = [];
                for (var op in opsList) {
                    if (op in opsList) {
                        opsArr.push(op);
                    }
                }
                ;
                var bannedArr = [];
                for (var op in bannedList) {
                    if (op in bannedList) {
                        bannedArr.push(op);
                    }
                }
                ;
                observer.next(new __WEBPACK_IMPORTED_MODULE_6__classes_roomdetails__["a" /* Roomdetails */](room, userArr, opsArr, bannedArr));
            });
        });
        return observable;
    };
    ChatService.prototype.getRoomTopic = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('updatetopic', function (room, topic, username) {
                observer.next(new __WEBPACK_IMPORTED_MODULE_5__classes_shared_room_obj__["a" /* SharedRoomObj */](room, topic, username, false));
            });
        });
        return observable;
    };
    ChatService.prototype.changeRoom = function (x) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.emit('joinroom', x, function (data, reason) {
                observer.next({ data: data, reason: reason });
            });
        });
        return observable;
    };
    ChatService.prototype.getServerAnnouncement = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('serverAnnouncement', function (obj) {
                observer.next(obj);
            });
        });
        return observable;
    };
    ChatService.prototype.leaveRoom = function (roomName) {
        this.socket.emit('partroom', roomName);
    };
    ChatService.prototype.kickUser = function (obj) {
        this.socket.emit('kick', obj, function (data) { });
    };
    ChatService.prototype.opUser = function (obj) {
        this.socket.emit('op', obj, function (data) { });
    };
    ChatService.prototype.deOpUser = function (obj) {
        this.socket.emit('deop', obj, function (data) { });
    };
    ChatService.prototype.banUser = function (obj) {
        this.socket.emit('ban', obj, function (data) { });
    };
    ChatService.prototype.unBanUser = function (obj) {
        this.socket.emit('unban', obj, function (data) { });
    };
    ChatService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ChatService);
    return ChatService;
}());
//# sourceMappingURL=C:/Users/Orri Arnarsson/Documents/Github/socketChat/frontEnd/src/chat.service.js.map

/***/ })

},[693]);
//# sourceMappingURL=main.bundle.map