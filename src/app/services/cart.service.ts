import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    ordersUrl = "http://localhost:5000/api/orders"
    productsUrl = "http://localhost:5000/api/products"

    constructor(private httpClient: HttpClient) {
    }

    getProducts(ids: string) {
        return this.httpClient.get(`${this.productsUrl}?ids=${ids}`)
    }

    addOrder(orders: any) {
        return this.httpClient.post(this.ordersUrl, orders);

    }


}