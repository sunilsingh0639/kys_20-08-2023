import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { PlansModule } from './plans/plans.module';
//import { NameDirective } from './directive/name.directive';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    PlansModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
