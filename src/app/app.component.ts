import { Component ,OnInit} from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
declare var $:any;
declare var ga:Function;
@Component({
  selector: 'app-home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  appName = '';
  title = '';

  location: Location;
   private currentRoute:string;
   constructor(public router: Router) {
     console.log('loading constructor');
     this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
              ga('set', 'page', event.urlAfterRedirects);
              ga('send', 'pageview');
              ga('send', 'event', {
                    eventCategory: 'pageview',
                    eventLabel: 'Page view',
                    eventAction: 'Navigation',
                    eventValue: event.urlAfterRedirects
              });
          }
     });
  }

  ngOnInit(){
      $.getScript('../assets/js/material-dashboard.js');
      $.getScript('../assets/js/initMenu.js');
  }
  public isMaps(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
          return false;
      }
      else {
          return true;
      }
  }
}
