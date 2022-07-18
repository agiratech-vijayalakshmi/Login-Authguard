import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthguardGuard } from './authguard.guard'
import { LibraryComponent } from './library/library.component';
import { LibraryModule } from './library/library.module';
import { FirstBookComponent } from './first-book/first-book.component';
import { Route, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { LibraryRoutingModule } from './library/library-routing.module';
import { FirstBookRoutingModule } from './first-book/first-book-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,

    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LibraryRoutingModule,
    FirstBookRoutingModule
        
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
