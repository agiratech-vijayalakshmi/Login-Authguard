import { NgModule } from '@angular/core';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { FirstBookComponent } from './first-book/first-book.component'; 
import { AuthguardGuard } from './authguard.guard'



const routes: Routes = [{ path: 'library',
component:LibraryComponent,
canActivate: [AuthguardGuard],
children:[{path: 'first-book', component:FirstBookComponent},],
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
