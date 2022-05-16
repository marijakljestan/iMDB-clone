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
            for(let movie of this.allMovies) {
                if(!this.watchList.some((item) => item.id == movie.id))
                    movie.notInWatchlist = true;
                else
                    movie.notInWatchlist = false;
            }
            this.topRatedList = this.allMovies;
            this.topRatedList.sort((a, b) => (a.averageGrade > b.averageGrade ? -1 : 1));
            this.trendingList = this.allMovies;
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
