import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {path: '', component: AppHomeComponent},
  { path: 'app-home', component: AppHomeComponent},
  { path: '**', component: PageNotFoundComponent }
];

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
