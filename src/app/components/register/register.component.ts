import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private myService:UsersService) { }

  ngOnInit(): void {
    
  }
   ourValidation = new FormGroup({
    username : new FormControl("", Validators.required),
    email : new FormControl("", [Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required,Validators.min(6)]),
    image : new FormControl("", Validators.required),

  }) 

 /*  Add(username:any , email:any , password:any){

  } */

  title:string = "Register"

  username:any
  email:any
  password:any
  image:any
  gender:any
  
  get UserName(){

    return this.ourValidation.controls.username.valid;
  }

  get Email(){
    
    return this.ourValidation.controls.email.valid;
  }

  get Password(){
    
    return this.ourValidation.controls.password.valid;
  }

  get Image(){
    
    return this.ourValidation.controls.image.valid;
  }

  selectedFile = null;

  onFileSelected(event:any){
    // console.log(event)
    this.selectedFile = event.target.files[0].name;
  }

  Register(){

    // if(this.ourValidation.valid){}

    if(this.UserName && this.Email && this.Password){

      let user = {
      username:this.username,
      email:this.email,
      password:this.password,
      image: this.selectedFile,
      gender: this.gender
    } 
     console.log("register")
    this.myService.Register(user).subscribe(
      /* (res) => {},
      (err) => {console.log(err)} */
    );
    console.log(user)
    // console.log(this.ourValidation)
  }
}

}
