import {UsersService} from '../../services/users.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {toBase64} from '../../helpers/general_functions'
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private usersService: UsersService, private router: Router) {
    }

    ngOnInit(): void {
    }

    formValidation = new FormGroup({
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

    takenEmailError: any;

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
        this.usernameError = this.emailError = this.passwordError = this.genderError = this.imageError = ""

        if (this.formValidation.valid) {

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
                    if (err.error.email) {
                        this.takenEmailError = err.error.email
                    }
                }
            );

        } else {
            // check each input error
            if (!this.formValidation.controls.username.valid) {
                this.usernameError = true;
            }
            if (!this.formValidation.controls.email.valid) {
                this.emailError = true;
            }
            if (!this.formValidation.controls.password.valid) {
                this.passwordError = true;
            }
            if (!this.formValidation.controls.gender.valid) {
                this.genderError = true;
            }
            if (!this.formValidation.controls.image.valid) {
                this.imageError = true;
            }


        }
    }

}
