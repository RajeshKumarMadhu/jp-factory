import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReportCardsComponent } from './report-cards/report-cards.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { StoreMapComponent } from './store-map/store-map.component';
import { SearchPipe } from './search.pipe';
import { AppGaurdGuard } from './app-gaurd.guard';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const appRoutes: Routes = [
  {path: '', component: AppHomeComponent },
  { path: 'app-home', component: AppHomeComponent},
  { path: 'landing-page', component: LandingPageComponent, canActivate: [AppGaurdGuard]},
  { path: 'user-details', component: UserDetailsComponent, canActivate: [AppGaurdGuard]},
  { path: 'order-summary', component: OrderSummaryComponent, canActivate: [AppGaurdGuard]},
  { path: 'report-cards', component: ReportCardsComponent, canActivate: [AppGaurdGuard]},
  { path: 'item-entry', component: ItemEntryComponent, canActivate: [AppGaurdGuard]},
  { path: 'store-map', component: StoreMapComponent, canActivate: [AppGaurdGuard]},
  { path: '**', component: PageNotFoundComponent, canActivate: [AppGaurdGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    PageNotFoundComponent,
    OrderSummaryComponent,
    ReportCardsComponent,
    ItemEntryComponent,
    LandingPageComponent,
    UserDetailsComponent,
    StoreMapComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppGaurdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
