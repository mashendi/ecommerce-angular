import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService:UsersService, private router:Router) { }

  ngOnInit(): void {}

  title:string = "Login";
  AuthUser = {}

  email = "" ;
  password = "" ;
  message ="";


    validations = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.minLength(6)])

  })

  login(){
    if(this.validations.valid){
        let user ={
        email:this.email,
        password:this.password
      }

    this.usersService.Login(user).subscribe(
      (res)=>{
        this.AuthUser = res
        localStorage.setItem("user",JSON.stringify(this.AuthUser))
        this.router.navigate(["/home"]);
      },
      (err)=>{
        this.message=err.error.error;
      }
    );
  }
}

  get Email(){
    return this.validations.controls.email.invalid && this.validations.controls.email.touched;
  }

  get Password(){
    return this.validations.controls.password.invalid && this.validations.controls.password.touched;
  }

  get Disable(){
    return this.validations.invalid
  }

}
