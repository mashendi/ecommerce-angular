import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private myClient:HttpClient) { }

  baseUrl = "http://localhost:5000/api";

  Login(user:any){
  
    return this.myClient.post(this.baseUrl+"/login", user,{withCredentials:true})
  }

}
