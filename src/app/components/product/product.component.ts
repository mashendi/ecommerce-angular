import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
    @Input() product: any;
    @Input() addToCart: boolean = false;

    constructor() {}

    ngOnInit() {}

    addItem(product: any) {
        if (!localStorage.getItem('cart_products')) {
            localStorage.setItem('cart_products', '');
        }

        const cartProducts = localStorage.getItem('cart_products');
        cartProducts === ''
            ? localStorage.setItem('cart_products', product._id)
            : localStorage.setItem(
                  'cart_products',
                  `${cartProducts},${product._id}`
              );
    }
}
