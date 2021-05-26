import { Component, OnInit } from '@angular/core';
import{ConfirmationService} from 'src/app/services/confirmation.service'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  order:any;

  constructor(private myService:ConfirmationService) {
    // this.id = route.snapshot.params.id;

   }

  ngOnInit(): void {
    const user = window.localStorage.getItem("user")||"{}";
    const userId =JSON.parse(user).userId;


    this.myService.orderByUserId(userId).subscribe(
      
      (res)=>{
        this.order=res
        console.log(res)
      },
      (err)=>{console.log(err)} 
    )
   
    

  }


}
