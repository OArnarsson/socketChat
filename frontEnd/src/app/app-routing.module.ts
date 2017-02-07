import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { MainComponent} from './main/main.component'
import { LoginComponent} from './login/login.component'

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'main', component: MainComponent},
    {path: '**', component: LoginComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
    ],
    exports:[
        RouterModule
    ],
  declarations: []
})
export class AppRoutingModule { }
