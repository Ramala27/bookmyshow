import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  // isLoggedIn = true;

  isLoggedIn = false;

  constructor(){
    console.log('HeaderComponent');
    

  }
  ngOnInit(): void {
    // fetch form localstorage whether user is loggedin
    this.isLoggedIn = localStorage.getItem("LOGGED_IN_USER")== 'true' ;
  }

  logout(){
    // localStorage.removeItem("LOGGED_IN_USER");
    localStorage.clear();
     alert("Successfully LoggedOut`````");
     window.location.href="/login";
  }

}
