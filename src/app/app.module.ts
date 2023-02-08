import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {BadgeModule} from 'primeng/badge';







@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputNumberModule,
    SidebarModule,
    BrowserAnimationsModule,
    FormsModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
