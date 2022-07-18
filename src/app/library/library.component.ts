import { Component, OnInit } from '@angular/core';
import{ NgModule } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
logOut(){
  localStorage.getItem('isLoggedin') == 'false'
  this.route.navigate(['']);
 
}
}
