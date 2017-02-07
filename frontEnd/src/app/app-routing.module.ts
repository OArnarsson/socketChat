import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { MainComponent} from './main/main.component'

const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: '**', component: MainComponent}
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
