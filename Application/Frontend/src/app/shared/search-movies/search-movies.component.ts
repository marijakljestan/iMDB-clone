import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDto } from 'src/app/model/movie-dto.model';
import { MovieCrewService } from 'src/app/service/movie-crew.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
    searchParam: string = "";
    searchResults: MovieDto[] = [];
    allMovies: MovieDto[] = [];
    
    constructor(private movieService: MovieService, private movieCrewService: MovieCrewService, private router: Router) { }

    ngOnInit(): void {
        this.movieService.getAllMovies().subscribe(response => {
            this.allMovies = [...response];
            for(let movie of this.allMovies)
                this.movieCrewService.getMovieActors(movie.id).subscribe(data => movie.actors = data);
        });
    }

    showMovie(movie: MovieDto){
        this.router.navigate(['/movie', movie.id])
        alert(movie.id)
    }

    onAddSearchParam() {
        this.searchResults = [];
        for(let movie of this.allMovies){
        if(movie.name.toLowerCase().indexOf(this.searchParam.toLowerCase()) !== -1)
            this.searchResults.push(movie);
        }
    }

    onFocusLost($event: Event) : void {
        this.searchParam = "";
        this.searchResults = [];
    }
}
