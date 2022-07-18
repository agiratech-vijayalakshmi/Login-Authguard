import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-book',
  templateUrl: './first-book.component.html',
  styleUrls: ['./first-book.component.css']
})
export class FirstBookComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.getItem('isLoggedin') == 'false'
    this.route.navigate(['']);
}
}
