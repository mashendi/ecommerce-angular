import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import{ConfirmationService} from 'src/app/services/confirmation.service'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  id:any;
  order:any;

  constructor(private myService:ConfirmationService,route:ActivatedRoute) {
    this.id = route.snapshot.params.id;

   }

  ngOnInit(): void {
    this.myService.orderDetails(this.id).subscribe(
      (res)=>{this.order=res},
      (err)=>{console.log(err)}
      

    )
    

  }


}
