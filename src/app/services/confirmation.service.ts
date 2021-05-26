import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private myClient:HttpClient) { }
  baseURL="http://localhost:5000/api/orders"
  

  orderByUserId(userId:any){
    // return this.myclient.get(this.baseURL,id)
    return this.myClient.get(this.baseURL+'?userId='+userId);

  }
}
