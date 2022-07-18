import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstBookComponent } from './first-book.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstBookRoutingModule { }
