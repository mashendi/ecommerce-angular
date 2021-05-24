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
    proudacts: any;
    productsIds = [];
    //quantity: any = 1;


    //uuu=["60a2faf862a5fb33b80f86be","60a820c342df362b20b784a5","ooooooooooooooooooo"];

    // setitems=localStorage.setItem("id",JSON.stringify(this.uuu));
    // idproducts=JSON.parse(<any>localStorage.getItem('id'));

    constructor(private myService: CartService) {
    }

    ngOnInit(): void {
        if (window.localStorage.id)
            this.productsIds = JSON.parse(<string>window.localStorage.getItem('id'))

        const queryString = this.productsIds.join(",");
        console.log(queryString)
        this.myService.getProducts(queryString).subscribe(
            (req) => {
                // console.log(req);
                this.proudacts = req;
                // console.log(this.proudacts)

            },

            (err) => {
                console.log(err)
            }
        )
        // this.x = localStorage.setItem("product",  JSON.stringify(this.fruits));

    }
    decrese(e: any, c: any) {
        let nextsibling;
        let total;
        // console.log(yy);

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