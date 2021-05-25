import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent,  ConfirmationComponent, HeroComponent],
  imports: [BrowserModule, FontAwesomeModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
