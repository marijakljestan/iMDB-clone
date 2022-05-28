import { Component, OnInit } from '@angular/core';
import { MovieDto } from '../model/movie-dto.model';
import { User } from '../model/user.model';
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
    loggedUser: User | any;
    
    constructor(private movieService: MovieService) {}
    
    ngOnInit() {   
        if(localStorage.getItem("loggedUser") !== null){
            this.loggedUser = JSON.parse(localStorage.getItem("loggedUser")!);  
            this.fetchWatchlist();
        }
        this.fetchMovies();
        this.images = [
            "https://cinematic-images.s3.amazonaws.com/Batman/Batman1.jpg",
            "https://cinematic-images.s3.amazonaws.com/dark-knight/dark-knight.jpg",
            "https://cinematic-images.s3.amazonaws.com/joker/joker.jpg",
            "https://cinematic-images.s3.amazonaws.com/la-vita-e-bella/la-vita-e-bella-2.jfif",
            "https://cinematic-images.s3.amazonaws.com/la-vita-e-bella/la-vita-e-bella-2.jfif",
            "https://cinematic-images.s3.amazonaws.com/schindlers-list/schindlers-list.jpg"
        ];
    }

    private fetchMovies() {
        this.movieService.getAllMovies().subscribe(response => {
            this.allMovies = [...response];
            for(let movie of this.allMovies) {
                if(!this.watchList.some((item) => item.id == movie.id))
                    movie.notInWatchlist = true;
                else
                    movie.notInWatchlist = false;
            }
            this.topRatedList = this.allMovies;
            this.topRatedList.sort((a, b) => (a.averageGrade > b.averageGrade ? -1 : 1));
            this.trendingList = this.allMovies.slice();
            this.trendingList.sort(() => Math.random() - 0.5);
        });
    }

    private fetchWatchlist() {
        this.movieService.getWatchlist().subscribe(response => {
            this.watchList = response;
        });
    }

    displaySearchResults(eventData: string){
        this.searchResults = [];
        for(let movie of this.topRatedList){
        if(movie.name.toLowerCase().indexOf(eventData.toLowerCase()) !== -1)
            this.searchResults.push(movie);
        }
    }
}
