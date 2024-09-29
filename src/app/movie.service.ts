import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }


   private   movies = [
    {
      id:"1",
      title:"Tumbbad",
    imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAxMDAuNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00079092-wzzsfeaaxh-portrait.jpg",
    description:"Fantasy/Horror/Period",
    language:"Hindi",
    price:"150"
    },
    {
      id:"2",
      title:"Meiyazhagan",
      imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTMuN0sgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00405427-jtaxncpkny-portrait.jpg",
      description:"Comedy/Drama",
      language:"Tamil",
      price:"250"
    },
    { 
      id:"3",
      title:"The Greatest of All Time",
      imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-greatest-of-all-time-et00401439-1725014428.jpg",
      description:"Action/Drama/Thriller",
      language:"Tamil",
      price:"520"
    },
    {
      id:"4",
      title:"Rubber Pandhu",
      imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/lubber-pandhu-et00409924-1725002124.jpg",
      description:"Comedy/Drama/Sports",
      language:"Tamil",
      price:"250"
    },
    {
      id:"5",
      title:"Devara - Part 1",
      imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-ODA5LjhLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310216-tluebxpafx-portrait.jpg",
      description:"Action/Drama/Thriller",
      language:"Kannada",
      price:"320"
    },
    {
      id:"6",
      title:"Hitler",
      imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hitler-et00413125-1727093184.jpg",
      description:"Action/Drama/Thriller",
      language:"Tamil",
      price:"300"
    },
    {
      id:"7",
      title:"Joker: Folie a Deux",
      imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/joker-folie-a-deux-et00352820-1727168074.jpg",
      description:"Action/Drama/Thriller",
      language:"English",
      price:"450"
    }
  ];

  getAllMovies(){
    return this.movies;
  }

  getMovieDetails(title:string){
    const selectedMovie = this.movies.find(obj=> obj.title == title);
    return selectedMovie;
  }

  getMoviesByAllLanguage(language:string){
   const filteredMovies = this.movies.filter(obj=> obj.language == language);
   return filteredMovies;
  }

getMoviesLessThanPrice(price:number){

}

}
