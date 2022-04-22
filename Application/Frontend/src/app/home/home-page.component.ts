import { Component, OnInit } from '@angular/core';
import { MovieDto } from '../model/movie-dto.model';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    allMovies: MovieDto[] = [];
    topRatedList: MovieDto[] = [];
    watchList: any[] = [];
    trendingList: MovieDto[] = [];
    images: string[] = [];
    searchParam: string = "";
    searchResults: any[] = [];
    
    constructor(private movieService: MovieService) {}
    
    ngOnInit() {     
        this.fetchMovies();
      
        this.images = [
            "../../../assets/images/cover/batman.jpg",
            "../../../assets/images/cover/dark-knight.jpg",
            "../../../assets/images/cover/fight-club.jpg",
            "../../../assets/images/cover/inception.jpg",
            "../../../assets/images/cover/la-vitta-e-bella.jpg",
            "../../../assets/images/cover/godfather.jpg"
        ];
    }

    private fetchMovies() {
        this.movieService.getAllMovies().subscribe(response => {
            this.allMovies = [...response];
            this.topRatedList = [...response];
            this.topRatedList.sort((a, b) => (a.averageGrade > b.averageGrade ? -1 : 1));
            this.trendingList = [...response];
        });
    }


    displaySearchResults(eventData: string){
        this.searchResults = [];
        for(let movie of this.topRatedList){
        if(movie.name.toLowerCase().indexOf(eventData) !== -1)
            this.searchResults.push(movie);
        }
    }
}
