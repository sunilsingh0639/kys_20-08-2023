import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListComponent } from './books/list/list.component';
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from './shared/table/table.component';
import { PlansComponent } from './plans/plans/plans.component';


const routes: Routes = [
  //{path: '', component: LoginComponent},
  //{path:'list', component: ListComponent},
 // {path: 'layout', component: LayoutComponent},
 {
  path : "",
  component : LoginComponent
 },
  {
    path : "app",
    component : LayoutComponent,
    children :[
      {
        path : "list",
        component : ListComponent
      },
      {
        path : "table",
        component : TableComponent
      },
      
      {
        path:"plans", component: PlansComponent
      }


    ]
    
  }
  // import('./auth/auth.module').then((mod)=> mod.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
