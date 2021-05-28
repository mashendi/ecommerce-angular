import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  BASE_URL = 'http://localhost:5000/api/orders';


  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(this.BASE_URL);
  }

  updateOrder(id:string , order:any){
    console.log(order);
    console.log(id);
    return this.http.put(`${this.BASE_URL}/${id}`, order)
  }

}
