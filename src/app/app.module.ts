import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartService } from './services/cart.service'

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, CartComponent],
  imports: [BrowserModule, FontAwesomeModule,HttpClientModule,FormsModule],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
