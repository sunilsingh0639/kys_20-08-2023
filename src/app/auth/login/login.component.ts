import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = {


    email: ""
  }


  loginForm!: FormGroup;
  allUsers: any;
  constructor(private _fb: FormBuilder, private _service: LoginService, private _router: Router) {
  }

  ngOnInit(): void {
    this.initialLoginForm()
   this.booklistData();
  }

  booklistData(){
    // this._service.getbooklist()
    // .subscribe((res) =>{
    //   console.log(res);
    // })
  }
  

  initialLoginForm() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required,]]
    })
  }

  submit() {
    const body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

  
    // this.service.login(body).subscribe((res: any) => {
    //   this.allUsers = res
    //   console.log(res)
    // })




  }
  next() {
    // this.router.navigate(['list'])
  }

  login() {
    this._service.login(this.loginForm.value)
      .subscribe((res : any) => {
        console.log(res)
        sessionStorage.setItem('token', res.token)
        this._router.navigate(['app/list'])
        // console.log(this.loginForm.value)
      })
  }





  // integreRegex = /^\d+$/

  // emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

}
