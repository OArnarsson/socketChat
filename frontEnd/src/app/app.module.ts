import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CurrentchatComponent } from './currentchat/currentchat.component';
import { ChatdetailsComponent } from './chatdetails/chatdetails.component';
import { ChatpickerComponent } from './chatpicker/chatpicker.component';
import {ChatService} from "./chat.service";
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        CurrentchatComponent,
        ChatdetailsComponent,
        ChatpickerComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ChatService],
    bootstrap: [AppComponent]
})
export class AppModule { }
