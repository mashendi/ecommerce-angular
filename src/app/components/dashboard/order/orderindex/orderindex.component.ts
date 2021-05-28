import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../../services/order.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-orderindex',
  templateUrl: './orderindex.component.html',
  styleUrls: ['./orderindex.component.css']
})
export class OrderindexComponent implements OnInit {
  orders: any = [];
  order: any = {};

  constructor(private orderService:OrderService, private router: Router ) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      (data) => this.orders = data,
      (err) => console.error(err)
  );   

  }

  updateOrder(e:any, id: string){
    let status=e.target.value;
    this.order={status}
    this.orderService.updateOrder(id,this.order).subscribe(
      (data) => {
        this.router.navigate(['/dashboard/orders'])
      },
      (err) => console.log(err)
    )
  }
}
