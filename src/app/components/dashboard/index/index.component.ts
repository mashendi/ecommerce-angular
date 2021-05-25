import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
    products: any = [];
    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (data) => (this.products = data),
            (err) => console.error(err)
        );
    }
}
