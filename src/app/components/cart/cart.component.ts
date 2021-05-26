import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    counter: any = 1;
    calc: any = 120;
    products: any = [];
    productsIds: string  = '';

    constructor(private myService: CartService) {
    }

    ngOnInit(): void {
        if (window.localStorage.cart_products) {
            console.log(window.localStorage.getItem("cart_products"))
            this.productsIds = <string>window.localStorage.getItem('cart_products')
        }

        console.log(this.productsIds)
        this.myService.getProducts(this.productsIds).subscribe(
            (req) => {
                this.products = req;
            },

            (err) => {
                console.log(err)
            }
        )
    }

    decrese(e: any, c: any) {
        let nextsibling;
        let total;

        if (this.counter > 0) {
            let x = e.target.parentNode.children[1].value = --this.counter;
            console.log(e.target.parentNode.children[1]);
            console.log(x)
            total = c.price * x;
            nextsibling = e.target.parentNode.parentNode.nextSibling.children[0].textContent = total;

            console.log(nextsibling);

        }
        // // var x=  this.value--;


    }


    incrses(e: any, c: any) {
        let nextsibling;
        let total;
        // let ff=0;
        let x = e.target.parentNode.children[1].value = ++this.counter;
        // console.log(x=x++);
        total = c.price * x;
        //  console.log(e.target.parentNode.parentNode.nextSibling)
        nextsibling = e.target.parentNode.parentNode.nextSibling.children[0].textContent = total;
        console.log(nextsibling);


        //  console.log(tt);
        // ++this.quantity
        // console.log(event.price*this.quantity)
        // //  this.counter++;
        // //
        // //  var x = ++this.counter;


        //console.log(e);

    }


    //add addOrder
    addOrder() {
        //let userId = JSON.parse(<string>window.localStorage.getItem('id'))

        let orders = {
            user: "60aae78105cfa58ff2efc5ee",  //local storge
            products: {
                product_id: this.productsIds,
                quantity: this.counter

            },
            totalPrice: this.calc,

        }

        this.myService.getOrder(orders).subscribe();
        console.log(orders)
    }


}
