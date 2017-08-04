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
    if(e.qty!= undefined && e.price!= undefined){
      if(e.qty!= '' && e.price != ''){
        e.itemtotal = e.qty*e.price;
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
  discount = 0;
  cgstTaxPercentile = 8;
  sgstTaxPercentile = 4;
  total =0;
  sum(item){
    this.calcTotal(item);
    this.subtotal = 0;
    if(!isNaN(item.itemtotal) && item.itemtotal!= undefined && item.itemtotal!=''){
      this.items.forEach(item =>(this.subtotal += parseFloat(item.itemtotal)));
      this.cgstTax = (this.subtotal-this.discount)*this.cgstTaxPercentile/100;
      this.sgstTax = (this.subtotal-this.discount)*this.sgstTaxPercentile/100;
      this.total = this.subtotal+this.cgstTax + this.sgstTax;
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
    if(!isNaN(item.itemtotal) && item.itemtotal!= undefined && item.itemtotal!=''){
      this.items.forEach(item =>(this.subtotal += parseFloat(item.itemtotal)));
      this.cgstTax = (this.subtotal-this.discount)*this.cgstTaxPercentile/100;
      this.sgstTax = (this.subtotal-this.discount)*this.sgstTaxPercentile/100;
      this.total = this.subtotal+this.cgstTax + this.sgstTax;
    }
  }
}
