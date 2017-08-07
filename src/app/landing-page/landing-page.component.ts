import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        $.getScript('assets/js/sidebar-moving-tab.js');
  }

  notesOfTheWeek  =
  [
      {description:' Ravi is on leave this week ',date:''},
      {description:' Getting goods load on tomorrow night',date:''},
      {description:' Deliver 2 bundles of pipes to XYZ store',date:''}
  ];

  empData = [{
    name: 'Raj',
    salary: '325.34',
    attendance: '5.5 days'
  },
  {
    name: 'Ravi',
    salary: '225.34',
    attendance: '6 days'
  },
  {
    name: 'Prem',
    salary: '525.34',
    attendance: '8 days'
  },
  {
    name: 'Madhu',
    salary: '525.34',
    attendance: '8 days'
  },
  {
    name: 'Anand',
    salary: '525.34',
    attendance: '8 days'
  }]


  desc=''
  companyname ='Jothi PVC pipes'
  addNote(note){
      this.notesOfTheWeek.push({description:note,date:''})
  }

  deleteNote(note){
      this.notesOfTheWeek.splice(this.notesOfTheWeek.indexOf(note), 1);
  }

  saveNote(){

  }

}
