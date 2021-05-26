import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
    products: any = [];

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (data) => (this.products = data),
            (err) => console.error(err)
        );
    }

    deleteProduct(e: any, id: string) {
        e.preventDefault()
        this.productService.deleteProduct(id).subscribe(
            (data: any) => {
                if (data.ok) {
                    this.products = this.products.filter((product: any) => {
                        return product._id !== id
                    })
                }
            },
            (err) => {
                console.log(err)
            }
        )
    }
}
