import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ConfirmationComponent} from './components/confirmation/confirmation.component'

const routes: Routes = [
  {path:'orders/:id',component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
