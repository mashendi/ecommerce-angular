import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient: HttpClient) { }

  baseUrl = "http://localhost/ecommerce";

  AddNewUser(user:any){
    return this.myClient.post(this.baseUrl, user)
  }
}
