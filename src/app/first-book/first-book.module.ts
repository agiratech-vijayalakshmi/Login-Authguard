import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstBookRoutingModule } from './first-book-routing.module';
import { FirstBookComponent } from './first-book.component';


@NgModule({
  declarations: [
    FirstBookComponent
  ],
  imports: [
    CommonModule,
    FirstBookRoutingModule
  ]
})
export class FirstBookModule { }
