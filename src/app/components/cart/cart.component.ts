import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    counter: any = 1;
    calc: any=0 ;
    products: any = [];
    productsIds: string  = '';
    total:number=0;

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
                console.log(this.products)
                this.totalprice(this.products)

            },

            (err) => {
                console.log(err)
            }
        )


    }

    totalprice(params:any) {
        for(let i=0 ; i<params.length; i++){
            this.total+=params[i].price
        }
        console.log(this.total);
    }

    onChange(e:any,c:any){
        let x = window.localStorage.getItem("cart_products");
        let nextsibling;
        let total;
        total = c.price * e.target.value;
        nextsibling = e.target.parentNode.parentNode.nextSibling.children[0].textContent = total;
        // this.calc=nextsibling
        this.total+=c.price
        console.log(this.total);
    }

    //add addOrder
    addOrder(e:any) {
       // let  nextsibling = e.target.parentNode.previousSibling.querySelector('.totle');
       // console.log(nextsibling)

        //let userId = JSON.parse(<string>window.localStorage.getItem('id'))
        let user=window.localStorage.getItem("user");
        // @ts-ignore
        let x= user.split(',')
        let order = {
            user:"60a84bf33ab4c510c8329f3f" ,  //local storge
            products: [
                {
                    product_id:this.productsIds,
                    quantity: this.counter
                }
            ],
            totalPrice:this.total,
        }

        this.myService.addOrder(order).subscribe();
        console.log(order)
    }



}
