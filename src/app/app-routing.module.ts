import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { AboutComponent } from './components/about/about.component';

import { IndexComponent } from './components/dashboard/index/index.component';
import { EditComponent } from './components/dashboard/edit/edit.component';
import { NewComponent } from './components/dashboard/new/new.component';
import {ConfirmationComponent} from "./components/confirmation/confirmation.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'about', component: AboutComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'dashboard/products', component: IndexComponent},
  {path: 'dashboard/products/new', component: NewComponent},
  {path: 'dashboard/products/:id/edit', component: EditComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
