import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from 'src/app/services/confirmation.service'
import {Router} from "@angular/router";

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
    order: any;

    constructor(private confirmationService: ConfirmationService, private router: Router) {
    }

    ngOnInit(): void {
        const user = window.localStorage.getItem("user") || "{}";
        const userId = JSON.parse(user).userId;


        this.confirmationService.orderByUserId(userId).subscribe(
            (res) => {
                this.order = res
            },
            (err) => {
                console.log(err)
            }
        )
    }

    clearOrder(e: any): void {
        e.preventDefault();
        window.localStorage.removeItem("cart_products");
        this.router.navigate(['/home']);
    }
}
