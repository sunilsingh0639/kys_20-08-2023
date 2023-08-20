import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  // {path: '', component: LoginComponent},
  // {path:'list', component: ListComponent},
  // {path: 'layout', component: LayoutComponent}
  // // import('./auth/auth.module').then((mod)=> mod.AuthModule)},

 {
  path : "",
  component : ListComponent
 }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BooksRoutingModule { }
