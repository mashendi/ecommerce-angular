import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private myclient:HttpClient) { }
  baseURL="http://localhost:5000/api/orders"

  getAlorderDetails(){
    return this.myclient.get(this.baseURL)
  }
  
  orderDetails(id:any){
    // return this.myclient.get(this.baseURL,id)
    return this.myclient.get(this.baseURL+'/'+id);

  }
}
