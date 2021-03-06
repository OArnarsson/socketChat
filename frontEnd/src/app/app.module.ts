import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CurrentchatComponent } from './currentchat/currentchat.component';
import { ChatdetailsComponent } from './chatdetails/chatdetails.component';
import { ChatpickerComponent } from './chatpicker/chatpicker.component';
import { ChatService } from './services/chat.service';
import { LoginComponent } from './login/login.component';
import { InitialsPipe } from './pipes/initials.pipe';
import { NamecolorPipe } from './pipes/namecolor.pipe';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        CurrentchatComponent,
        ChatdetailsComponent,
        ChatpickerComponent,
        LoginComponent,
        InitialsPipe,
        NamecolorPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ToastyModule.forRoot()
    ],
    providers: [ChatService, InitialsPipe, NamecolorPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
