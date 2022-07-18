import { Component} from '@angular/core';
import{ NgModule } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { LoginService } from './login.service';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'login-book'; 
  
  


  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  
 
  ngOnInit(){
    localStorage.setItem('username', 'viji');
    localStorage.setItem('isLoggedIn', 'false');
  }
  

constructor(private fb: FormBuilder, private route:Router, private loginservice : LoginService) {
  // loginForm = this.fb.group({
  //   username: '',
  //   password: ''
  // });
}
  onSubmit(): void{
   
    
    console.log(this.loginForm.value);
    this.loginservice.checkusernameandpassword(this.loginForm.value.username! );
    this.route.navigate(['\library']);
    console.log('submitted');
   
  }
  
}
// this.loginservice.checkusernameandpassword(this.loginForm.value.username!);
