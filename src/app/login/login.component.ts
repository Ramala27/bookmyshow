import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email!:string;
  password!:string;

  constructor(){

     console.log('LoginComponent');


  }

  onSubmit(){
    console.log('Form Is Submitted');
    console.log('Email:', this.email, 'Password:', + this.password);

//  if admin@gamil.com, passwrd:123 , valid login

  if(this.email == "admin@gmail.com" && this.password == "pass123"){
    alert("Successfully LoggedIn");
    localStorage.setItem("LOGGED_IN_USER" , "true");
    localStorage.setItem("EMAIL", this.email);

// redirect
      window.location.href="/movies";
  }

  else{
    alert("Invalid Login");
  }
  
  }

}
