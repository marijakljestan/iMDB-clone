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
  moviesForDisplay: any[] = [];
  @Input() displayedMoviesLength: number = 5 ;
  initialMovieIndex: number = 0;
  loggedUser: User | any;

  constructor(private movieService: MovieService) { }

  ngOnInit() : void {
    this.displayMovieList();
    if(localStorage.getItem("loggedUser") !== null)
        this.loggedUser = JSON.parse(localStorage.getItem("loggedUser")!);
  }

  addToWatchlist(movie: MovieDto) {
    this.movieService.addMovieToWatchlist(movie);
    const index = this.movies.indexOf(movie, 0);
    if (index > -1) 
        this.movies.splice(index, 1);
    
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
    for(let i = this.initialMovieIndex; i < this.initialMovieIndex + this.displayedMoviesLength ; i++)
      this.moviesForDisplay.push(this.movies[i]); 
  }
}
