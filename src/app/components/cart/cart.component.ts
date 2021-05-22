import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    counter: any = 1;
    calc: any = 360;
    proudacts: any;
    productsIds = [];
    quantity:any=1;


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




    incrses(event:any,tt:any) {
        console.log(tt);
       ++this.quantity
       console.log(event.price*this.quantity)
       //  this.counter++;
       //
       //  var x = ++this.counter;
       this.calc = event.price * this.quantity;

    }

    decrese(e:any,yy:any) {
        console.log(yy);

        if (this.quantity > 0) {
            var x = --this.quantity;
           this.calc = x * e.price;

        }
        // var x=  this.value--;


    }


    //add addOrder
    addOrder(){
        let orders={
            user:"60a978a20bf889489004a308",//local storge
            quantity:this.quantity,
            products:this.productsIds,
            totalPrice:this.calc,

        }

        this.myService.getOrder(orders).subscribe();
        console.log(orders)
    }


}
