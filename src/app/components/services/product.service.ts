import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.BASE_URL);
  }

  addProduct(product:any){
    return this.http.post(this.BASE_URL, product)
  }
}
