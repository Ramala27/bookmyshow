import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email!:string;
  password!:string;

  constructor(private readonly toastr:ToastrService){

     console.log('LoginComponent');


  }

  onSubmit(){
    console.log('Form Is Submitted');
    this.toastr.success("form submitted")
    console.log('Email:', this.email, 'Password:', + this.password);

//  if admin@gamil.com, passwrd:123 , valid login

  // if(this.email == "admin@gmail.com" && this.password == "pass123"){
const usersStr = localStorage.getItem("USERS");
let users = [];
if(usersStr){

users = JSON.parse(usersStr);

}else{

users = [];

}

// const val = (condition)?'a':'b'; //ternary operatory

// const users = usersStr != null ? JSON.parse(usersStr): [];
const userExists = users.find((obj: any)=> obj.email == this.email && obj.password == this.password);

if(userExists != null){
    // alert("Successfully LoggedIn");
    this.toastr.success("Successfully Loggedin"); 
    localStorage.setItem("LOGGED_IN_USER" , "true");
    localStorage.setItem("EMAIL", this.email);

// redirect
      window.location.href="/movies";
  }

  else{
    // alert("Invalid Login");
    this.toastr.error("Invalid Login Credentials");
  }

  }

}