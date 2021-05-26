import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
    hero_title: string = 'Shop';
    products: any = [];
    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (data) => (this.products = data),
            (err) => console.error(err)
        );
    }
}
