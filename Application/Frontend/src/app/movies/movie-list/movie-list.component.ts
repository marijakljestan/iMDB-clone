import { Component, Input, OnInit } from '@angular/core';
import { MovieDto } from 'src/app/model/movie-dto.model';
import { User } from 'src/app/model/user.model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  @Input() title : string = "";
  @Input() movies : MovieDto[] = [];
  moviesForDisplay: MovieDto[] = [];
  @Input() displayedMoviesLength: number = 5 ;
  initialMovieIndex: number = 0;
  loggedUser: User | any;
  showAddButton: boolean = true;

  constructor(private movieService: MovieService) { }

  ngOnInit() : void {
    this.displayMovieList();
    if(localStorage.getItem("loggedUser") !== null)
        this.loggedUser = JSON.parse(localStorage.getItem("loggedUser")!);

  }

  removeFromWatchlist(movie: MovieDto) {
    this.movieService.removeMovieFromWatchlist(movie);
    for(let mv of this.movies)
        if(mv.id === movie.id){
            mv.notInWatchlist = true;
            break;
        }
  }

  addToWatchlist(movie: MovieDto) {
    this.movieService.addMovieToWatchlist(movie);
    for(let mv of this.movies)
        if(mv.id === movie.id){
            mv.notInWatchlist = false;
            break;
        }
  }

  getNextMovie() : void {
    if(this.initialMovieIndex == this.movies.length - 1)
        return;

    ++this.initialMovieIndex;
    this.displayMovieList();
  }

  getPreviousMovie() : void {
    if(this.initialMovieIndex ==  0)
        return;

    --this.initialMovieIndex;
    this.displayMovieList();
  }

  displayMovieList() : void{
    this.moviesForDisplay = [];
    if(this.movies.length >= this.displayedMoviesLength)
        for(let i = this.initialMovieIndex; i < this.initialMovieIndex + this.displayedMoviesLength ; i++)
            this.moviesForDisplay.push(this.movies[i]); 
    else
        this.moviesForDisplay = this.movies;
  }
}
