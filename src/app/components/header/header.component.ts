import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {ProductService} from "../../services/product.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router, private usersService: UsersService, private productService: ProductService) {
    }

    loggedUser: { username: string, email: string, userId: string } = {username: "", email: "", userId: ""}
    isAdmin: boolean = false;
    search: string = ""

    ngOnInit(): void {
        if (window.localStorage.user) {
            this.loggedUser = JSON.parse(window.localStorage.user)
            this.usersService.getUserById(this.loggedUser.userId).subscribe(
                (data: any) => {
                    if (data.role == 'admin')
                        this.isAdmin = true;
                }, (error => {
                    console.log(error)
                })
            )
        }
    }

    handleLogout() {
        window.localStorage.removeItem("user");
        this.router.navigate(['/login'])
    }

    handleSearch(e: any) {
        e.preventDefault()
        this.router.navigate(['/dashboard/products'], {queryParams: {search: this.search}})
    }
}
