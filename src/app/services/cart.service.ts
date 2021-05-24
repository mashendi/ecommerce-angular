import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
url="http://localhost:5001/api/orders"
  constructor(private httpClient:HttpClient) { }

  getProducts( ids:string ){
    return this.httpClient.get(`http://localhost:5001/api/products?ids=${ids}`)
  }


  getOrder(orders:any){
    return this.httpClient.post(this.url,orders);

  }


}
