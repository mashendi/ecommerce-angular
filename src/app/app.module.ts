import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { HeroComponent } from './components/hero/hero.component';
import { ValidatorComponent } from './Validators/validator/validator.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { IndexComponent } from './components/dashboard/index/index.component';
import { EditComponent } from './components/dashboard/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { NewComponent } from './components/dashboard/new/new.component';
import { ShopComponent } from './components/shop/shop.component';
import { AboutComponent } from './components/about/about.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OrderindexComponent } from './components/dashboard/order/orderindex/orderindex.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        HeroComponent,
        ProductComponent,
        CartComponent,
        ValidatorComponent,
        RegisterComponent,
        IndexComponent,
        EditComponent,
        NewComponent,
        ShopComponent,
        AboutComponent,
        ConfirmationComponent,
        OrderindexComponent,
    ],
    imports: [

    BrowserModule,
        FontAwesomeModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
