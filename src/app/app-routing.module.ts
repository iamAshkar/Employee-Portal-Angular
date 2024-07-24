import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},//http://localhost:4200
  {path:'dashboard',component:DashboardComponent},
  
  { path: 'users', loadChildren: () => import('./Modules/users/users.module').then(m => m.UsersModule) },//http://localhost:4200/dashboard
  {path:'**',redirectTo:''}//http://localhost:4200

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
