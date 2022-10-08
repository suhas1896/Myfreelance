import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from 'src/app/login/login.component'
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:"home",component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
