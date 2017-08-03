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
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { StoreMapComponent } from './store-map/store-map.component';
import { SearchPipe } from './search.pipe';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const appRoutes: Routes = [
  {path: '', component: AppHomeComponent},
  { path: 'app-home', component: AppHomeComponent},
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'user-details', component: UserDetailsComponent},
  { path: 'order-summary', component: OrderSummaryComponent},
  { path: 'report-cards', component: ReportCardsComponent},
  { path: 'item-entry', component: ItemEntryComponent},
  { path: 'store-map', component: StoreMapComponent},
  { path: '**', component: PageNotFoundComponent}
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
    DashboardComponent,
    UserDetailsComponent,
    StoreMapComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
