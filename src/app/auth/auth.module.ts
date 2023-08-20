import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from '../books/list/list.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from "../shared/shared.module";
import { NameDirective} from '../directive/name.directive'
import { NumberDirective } from '../directive/number.directive'; 

@NgModule({
    declarations: [
        LoginComponent, ListComponent,
NameDirective, NumberDirective
    ],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule { }
