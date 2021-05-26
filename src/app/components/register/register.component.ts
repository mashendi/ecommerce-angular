import { UsersService } from '../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { toBase64 } from '../../helpers/general_functions'
import {Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usersService: UsersService, private router:Router) { }

  ngOnInit(): void {}
  ourValidation = new FormGroup({
    username: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.min(6)]),
    image: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required)
  })

  title: string = "Register";
  username: any;
  email: any;
  password: any;
  image: any;
  gender: any;

  usernameError: any;
  emailError: any;
  passwordError: any;
  imageError: any;
  genderError: any;

  get UserName() {
    return this.ourValidation.controls.username.valid;
  }

  get Email() {
    return this.ourValidation.controls.email.valid;
  }

  get Password() {
    return this.ourValidation.controls.password.valid;
  }

  get Image() {
    return this.ourValidation.controls.image.valid;
  }

  get Gender() {
    return this.ourValidation.controls.gender.valid;
  }

  selectedFile: any;

  async onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFile = await toBase64(file)
    }

  }
  selectedGender = null

  radioChangeHandler(event: any) {
    this.selectedGender = event.target.value;
  }

  Register() {


    if (this.UserName && this.Email && this.Password && this.Image && this.Gender) {

      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
        image: this.selectedFile,
        gender: this.selectedGender,

      }
      this.usersService.Register(user).subscribe(
        (data: any) => {
            if (data.ok)
                this.router.navigate(['/login']);
        },
        (err: any) => {
          if (err.error.email){
              console.log(err.error.email)
          }
        }

      );

    }
  }

}
