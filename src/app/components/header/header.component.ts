import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router) {
    }

    loggedUser: { username: string, email: string, userId: string } = {username: "", email: "", userId: ""}

    ngOnInit(): void {
        if (window.localStorage.user) {
            console.log(JSON.parse(window.localStorage.user))
            this.loggedUser = JSON.parse(window.localStorage.user)
        }
    }

    handleLogout() {
        window.localStorage.removeItem("user");
        this.router.navigate([''])
    }
}
