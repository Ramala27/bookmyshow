import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieService } from '../movie.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit{

// Data
  movies!:any[]; 

  language!:string;

  movieType!:string;

  price!:number;

  minprice!: number;

  maxprice!:number;

  constructor(private movieService:MovieService){

    console.log('MoviesListComponent');


  }

  ngOnInit(): void {
    console.log("OnInit method called");
    this.movies = this.movieService.getAllMovies();
    console.log('movies',this.movies);
  }


    reset(){
      this.movies = this.movieService.getAllMovies();
    }

   applyfillter(){

      //  alert("Language : "  + this.language);
      //   alert("MovieType : "  + this.movieType);
      //   alert("MinPrice : " +this.minprice + "-" + this.maxprice);
        
         if(this.language){
       this.movies = this.movies.filter(obj=> obj.language == this.language);
      }

      // if movietype is selected
      if(this.movieType){
      this.movies = this.movies.filter(obj=> obj.description.includes(this.movieType));
    }
          
      // if price filter is applied
      if(this.minprice && this.maxprice){
        this.movies = this.movies.filter(obj=>  obj.price >=this.minprice && obj.price <= this.maxprice);
      console.log('price filter');
      console.table(this.movies);
  
      }

   }

} 

