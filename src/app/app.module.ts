import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeroComponent } from './components/hero/hero.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, LoginComponent, HeroComponent],
  imports: [BrowserModule, FontAwesomeModule,FormsModule,HttpClientModule,ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
