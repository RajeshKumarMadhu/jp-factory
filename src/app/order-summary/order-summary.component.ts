import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  constructor() { }
  orderdata = '';
  taxData = '';
  totalData = '';
  ngOnInit() {
      this.orderdata = JSON.parse(sessionStorage.getItem('orderDetails'));
      this.taxData = JSON.parse(sessionStorage.getItem('taxinfo'));
      this.totalData = JSON.parse(sessionStorage.getItem('totalData'));
  }
  printDiv() {
    window.print();
  }

}
