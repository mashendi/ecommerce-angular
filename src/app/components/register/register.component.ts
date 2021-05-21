import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private myService:UsersService) { }

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
     console.log("register")
    this.myService.Register(user).subscribe(
      /* (res) => {},
      (err) => {console.log(err)} */
    );
    console.log(user)
  }

}
