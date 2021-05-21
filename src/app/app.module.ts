import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { HeroComponent } from './components/hero/hero.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ValidatorComponent } from './Validators/validator/validator.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, RegisterComponent, HeroComponent, ValidatorComponent],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule, RouterModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
