import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
    products: any = [];

    constructor(private productService: ProductService, private route: ActivatedRoute) {
        route.queryParams.subscribe(param => {
            this.searchProducts(param.search)
        });
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (data) => (this.products = data),
            (err) => {}
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
            }
        )
    }

    searchProducts(search: string) {
        this.productService.getProducts(search).subscribe(
            (data: any) => {
                this.products = data
            },
            (err: any) => {
            }
        )
    }
}
