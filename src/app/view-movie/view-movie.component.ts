import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-movie',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './view-movie.component.html',
  styleUrl: './view-movie.component.css'
})

export class ViewMovieComponent{


movieName!:string;
movie: any;

constructor(private route:ActivatedRoute){
   
this.movieName = this.route.snapshot.params["id"];
this.movie = this.movies.find(obj=> obj.title == this.movieName);
}

  movies = [
    {
      title:"Tumbbad",
    imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAxMDAuNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00079092-wzzsfeaaxh-portrait.jpg",
    description:"Fantasy/Horror/Period"
    },
    {
      title:"Meiyazhagan",
      imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTMuN0sgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00405427-jtaxncpkny-portrait.jpg",
      description:"Comedy/Drama"
    },
    {
      title:"The Greatest of All Time",
      imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-greatest-of-all-time-et00401439-1725014428.jpg",
      description:"Action/Drama/Thriller"
    },
    {
      title:"Rubber Pandhu",
      imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/lubber-pandhu-et00409924-1725002124.jpg",
      description:"Comedy/Drama/Sports"
    },
    {
      title:"Devara - Part 1",
      imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-ODA5LjhLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310216-tluebxpafx-portrait.jpg",
      description:"Action/Drama/Thriller"
    },
    {
      title:"Hitler",
      imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hitler-et00413125-1727093184.jpg",
      description:"Action/Drama/Thriller"
    },
    {
      title:"Joker: Folie a Deux",
      imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/joker-folie-a-deux-et00352820-1727168074.jpg",
      description:"Action/Drama/Thriller"
    }
  ]
  
} 

  
