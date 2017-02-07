import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CurrentchatComponent } from './currentchat/currentchat.component';
import { ChatdetailsComponent } from './chatdetails/chatdetails.component';
import { ChatpickerComponent } from './chatpicker/chatpicker.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        CurrentchatComponent,
        ChatdetailsComponent,
        ChatpickerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
