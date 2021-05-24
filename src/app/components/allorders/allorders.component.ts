import { Component, OnInit } from '@angular/core';
import{ConfirmationService} from 'src/app/services/confirmation.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {


  orders:any;

  constructor(private myService:ConfirmationService,private router: Router
    ) {
  }

  ngOnInit(): void {
    this.myService.getAlorderDetails().subscribe(
      (res)=>{this.orders=res},
      (err)=>{console.log(err)}

    )
   

  }
  viewOrder(id:any) {
    this.router.navigateByUrl(`orders/${id}`);
  }

}
