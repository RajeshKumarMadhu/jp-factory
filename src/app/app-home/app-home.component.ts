import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {
 public login: String;
 public welcome: String;
 public username: String;
 public password: String;

  private redirectUrl : String;

  constructor(public router: Router) {
    this.redirectUrl = 'landing-page'
 }

  ngOnInit() {
    this.welcome  = 'Welcome to JFactory';
    this.login = 'Login'
  }
  validateAndLogin(){
     if(this.username!=undefined && this.username!='') {
          if(this.password!=undefined && this.password!=''){
                console.log('Try login service');
                if(this.username == 'root' && this.password =='madhu'){
                    this.router.navigate([this.redirectUrl], { });

                }
          }
          else{
            console.log('password missing');
          }
       }
     else{
        console.log('Username missing');
     }

  }


}
