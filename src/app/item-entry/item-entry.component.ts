import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  printDiv() {
    window.print();
  }

  items =[ {name:'',itemtotal:''} ];

  calcTotal(e) {
    if(e.weight!= undefined && e.price!= undefined){
      if(e.weight!= '' && e.price != ''){
        e.itemtotal = e.weight*e.price;
        return true;
      }
      else if (isNaN(e) || e === undefined ||  e === ''||  e === null){
        e.itemtotal = 0;
        return false;
      }
    }

  }
  subtotal =0;
  cgstTax = 0;
  sgstTax = 0;
  discount = 0.0;
  tax = {cgstTaxPercentile : 9.0,sgstTaxPercentile: 9.0 ,cgstTaxAmt:0.0,sgstTaxAmt:0.0}
  cgstTaxPercentile = this.tax.cgstTaxPercentile;
  sgstTaxPercentile = this.tax.sgstTaxPercentile;
  total =0;
  totalData ={subtotal:0.0,total:0.0,discount:0.0};
  sum(item){
    this.calcTotal(item);
    this.subtotal = 0;
    if(!isNaN(item.itemtotal) && item.itemtotal!= undefined && item.itemtotal!=''){
      this.items.forEach(item =>(this.subtotal += parseFloat(item.itemtotal)));
      this.cgstTax = (this.subtotal-this.discount)*this.cgstTaxPercentile/100;
      this.sgstTax = (this.subtotal-this.discount)*this.sgstTaxPercentile/100;
      this.total = this.subtotal+this.cgstTax + this.sgstTax;
      if(this.cgstTax)
        this.tax.cgstTaxAmt = this.cgstTax;
      if(this.sgstTax)
        this.tax.sgstTaxAmt = this.sgstTax;
    }
    //this.calculateGst();
  }

  addItem(){
    this.items.push({name:'',itemtotal:''});
  }

  deleteItem(item){
    this.items.splice(this.items.indexOf(item), 1);
    this.recalculatePrice(item);
  }
  recalculatePrice(item){
    this.subtotal = 0;
    if(item == 'undefined'){
      this.items.forEach(item =>(this.subtotal += parseFloat(item.itemtotal)));
      this.cgstTax = (this.subtotal-this.discount)*this.cgstTaxPercentile/100;
      this.sgstTax = (this.subtotal-this.discount)*this.sgstTaxPercentile/100;
      this.total = this.subtotal+this.cgstTax + this.sgstTax;
    }
    else if(!isNaN(item.itemtotal) && item.itemtotal!= undefined && item.itemtotal!=''){
      this.items.forEach(item =>(this.subtotal += parseFloat(item.itemtotal)));
      this.cgstTax = (this.subtotal-this.discount)*this.cgstTaxPercentile/100;
      this.sgstTax = (this.subtotal-this.discount)*this.sgstTaxPercentile/100;
      this.total = this.subtotal+this.cgstTax + this.sgstTax;
    }

    if(this.cgstTax)
      this.tax.cgstTaxAmt = this.cgstTax;
    if(this.sgstTax)
      this.tax.sgstTaxAmt = this.sgstTax;
  }

  setDataAndRedirect(){
      sessionStorage.setItem('orderDetails', JSON.stringify(this.items));
      sessionStorage.setItem('taxinfo', JSON.stringify(this.tax));
      this.totalData.total = this.total;
      this.totalData.subtotal = this.subtotal;
      this.totalData.discount = this.discount;
      sessionStorage.setItem('totalData', JSON.stringify(this.totalData));
  }
}
