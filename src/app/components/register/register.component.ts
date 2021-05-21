import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title:string = "Register"

  username:any
  email:any
  password:any

  Register(){

    let user = {
      username:this.username,
      email:this.email,
      password:this.password
    }
  }

}
