import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
