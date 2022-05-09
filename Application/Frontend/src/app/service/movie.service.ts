import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDto } from '../model/movie-dto.model';
import Swal from 'sweetalert2';
import { MovieCrewService } from './movie-crew.service';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    private baseUrlMovies: string = environment.baseUrlMovie;
    private baseUrlWatchlist: string = environment.baseUrlWatchlist;

    headers = new HttpHeaders({'Content-Type' : 'application/json',
                               'Authorization' : `Bearer ${localStorage.jwt}`});

    constructor(private http: HttpClient, private movieCrewService: MovieCrewService) {}

    addMovieToWatchlist(movie: MovieDto) {
        return this.http.post<MovieDto>(this.baseUrlWatchlist, movie, {headers : this.headers}).subscribe((value)=>{
        }, (error)=>{
            Swal.fire({
                title: 'Ooops',
                text: 'Already in watchlist',
                icon: 'error',
                confirmButtonText: 'OK',
                position: 'top-right'
            });
        })
    }

    removeMovieFromWatchlist(movie: MovieDto) {
        return this.http.delete<MovieDto>(this.baseUrlWatchlist + movie.id, {headers : this.headers}).subscribe((value)=>{
        }, (error)=>{
            Swal.fire({
                title: 'Ooops',
                text: 'Not found in watchlist',
                icon: 'error',
                confirmButtonText: 'OK',
                position: 'top-right'
            });
        })
    }

    addMovie(movie: Movie) : Observable<Movie> {
        return this.http.post<Movie>(this.baseUrlMovies, movie, {headers: this.headers});
    }

    getMovieById(id: number) : Observable<MovieDto> {
        return this.http.get<MovieDto>(this.baseUrlMovies + id);
    }

    getMoviesReviewedByUser(userId: number) : Observable<MovieDto[]> {
        return this.http.get<MovieDto[]>(this.baseUrlMovies + 'reviewed-by-user/' + userId, {headers: this.headers});
    }

    getWatchlist() : Observable<MovieDto[]> {
        return this.http.get<MovieDto[]>(this.baseUrlWatchlist, {headers: this.headers});
    }

    getAllMovies() : Observable<MovieDto[]> {
        return this.http.get<MovieDto[]>(this.baseUrlMovies);
    }
}
