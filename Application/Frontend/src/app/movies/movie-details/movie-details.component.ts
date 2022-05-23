import { Component, Input, OnInit } from '@angular/core';
import { MovieDto } from 'src/app/model/movie-dto.model';
import { User } from 'src/app/model/user.model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
    selector: 'movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    @Input() movie: any = {};
    user: User | any;
    watchlist: MovieDto[] = [];
    inWatchlist: boolean = false;

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        if(localStorage.getItem("loggedUser") !== null)
            this.user = JSON.parse(localStorage.getItem("loggedUser")!);
        
        this.movieService.getWatchlist().subscribe(data => {
            this.watchlist = data;
            for(let m of this.watchlist)
                if(this.movie.id == m.id){
                    this.inWatchlist = true;
                    break;
                }
        });
    }

    addToWatchlistHandler() {
        this.movieService.addMovieToWatchlist(this.movie);
        this.inWatchlist = true;
    }

    removeFromWatchlistHandler() {
        this.movieService.removeMovieFromWatchlist(this.movie);
        this.inWatchlist = false;
    }
}
