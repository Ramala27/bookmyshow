import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,MoviesListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
