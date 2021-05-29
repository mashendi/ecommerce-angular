import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service'
import {Router} from "@angular/router";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    counter: any = 1;
    calc: any = 0;
    products: any = [];
    productsIds: string = '';
    total: number = 0;

    constructor(private myService: CartService, private router: Router) {
    }

    ngOnInit(): void {
        if (window.localStorage.cart_products) {
            this.productsIds = <string>window.localStorage.getItem('cart_products')
        }

        this.myService.getProducts(this.productsIds).subscribe(
            (req) => {
                this.products = req;
                this.totalprice(this.products)
                this.router.navigate(['/confirmation'])
            },

            (err) => {
                console.log(err)
            }
        )


    }

    totalprice(params: any) {
        for (let i = 0; i < params.length; i++) {
            this.total += params[i].price
        }
    }

    onChange(e: any, c: any) {
        let x = window.localStorage.getItem("cart_products");
        let nextsibling;
        let total;
        total = c.price * e.target.value;
        nextsibling = e.target.parentNode.parentNode.nextSibling.children[0].textContent = total;
        this.total += c.price
        console.log(this.total);
    }

    //add addOrder
    addOrder(e: any) {
        // @ts-ignore
        let x = this.productsIds;
        let y = x.split(",")
        console.log(x.split(","))
        let userObj = JSON.parse(<string>window.localStorage.getItem("user"))
        console.log(userObj)

        let userId = userObj.userId;
        console.log(userId)
        let order = {
            user: userId,  //local storge
            products: [
                {
                    product_id: y,
                    quantity: this.counter
                }
            ],
            totalPrice: this.total,
        }

        this.myService.addOrder(order).subscribe();
        console.log(order)
    }


}
