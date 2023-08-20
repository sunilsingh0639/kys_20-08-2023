import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ListComponent } from '../books/list/list.component';



const routes: Routes = [
  {path: '',
   component: LoginComponent
  },
 // {path:'list', component: ListComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AuthRoutingModule { }
