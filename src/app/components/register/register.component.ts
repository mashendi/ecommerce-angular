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
    gender : new FormControl("", Validators.required)


  }) 


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

  get Gender(){
  
    return this.ourValidation.controls.gender.valid;
  }

  selectedFile = null;

  onFileSelected(event:any){
    // console.log(event)
    this.selectedFile = event.target.files[0].name;
  }
  selectedGender = null
  /* genders:any = [
    'Male',
    'Female'
  ] */
  radioChangeHandler(event:any){
    this.selectedGender = event.target.value;
    // console.log(this.selectedGender)
  }

  Register(){

    // if(this.ourValidation.valid){}

    if(this.UserName && this.Email && this.Password && this.Image){

      let user = {
      username:this.username,
      email:this.email,
      password:this.password,
      image: this.selectedFile,
      gender: this.selectedGender
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
