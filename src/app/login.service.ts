import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
  
})

export class LoginService {
  localstorage: any;
  localStorage: any;
  ngOnInit(){
    
  }   
  constructor() {}

checkusernameandpassword(username:string)
    {
if( localStorage.getItem('username') == username ){
 localStorage.setItem('isLoggedIn', 'true');
  console.log('service');
}
else{
 localStorage.setItem('isLoggedIn','false');
  console.log('service f');
}
    }
  }
