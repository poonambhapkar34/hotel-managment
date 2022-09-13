import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlandComponent } from './userland/userland.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersuccesComponent } from './usersucces/usersucces.component';


const routes: Routes = [
  // {path: 'userland', component: UserlandComponent},
  // {path:'', redirectTo:'userland', pathMatch:'full'},

  // {path:'usersignin',component:UsersigninComponent},
  // {path:'usersignup',component:UsersignupComponent},
  
  // {path:'usersucces',component:UsersuccesComponent},

  {path:'user' , children:[
    {path: 'userland', component: UserlandComponent},
    {path:'', redirectTo:'userland', pathMatch:'full'},
  
    {path:'usersignin',component:UsersigninComponent},
    {path:'usersignup',component:UsersignupComponent},
    
    {path:'usersucces',component:UsersuccesComponent},
  
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
