import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  constructor() { }
  orderdata = '';
  taxData = {cgstTaxPercentile : 9.0,sgstTaxPercentile: 9.0 ,cgstTaxAmt:0.0,sgstTaxAmt:0.0};
  totalData = {subtotal : 0.0,total: 0.0 ,discount:0.0};

  ngOnInit() {
      this.orderdata = JSON.parse(sessionStorage.getItem('orderDetails'));
      this.taxData = JSON.parse(sessionStorage.getItem('taxinfo'));
      this.totalData = JSON.parse(sessionStorage.getItem('totalData'));
  }
  printDiv() {
    window.print();
  }

}
