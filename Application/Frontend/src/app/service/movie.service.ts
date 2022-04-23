import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { MovieDto } from '../model/movie-dto.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    private baseUrlMovies: string = environment.baseUrlMovie;
    private baseUrlWatchlist: string = environment.baseUrlWatchlist;

    headers = new HttpHeaders({'Content-Type' : 'application/json',
                               'Authorization' : `Bearer ${localStorage.jwt}`});

    constructor(private http: HttpClient) {}

    addMovieToWatchlist(movie: MovieDto) {
        let customHeaders = new HttpHeaders({'Content-Type' : 'application/json',
                                             'Authorization' : `Bearer ${localStorage.jwt}`});

        return this.http.post<MovieDto>(this.baseUrlWatchlist, movie, {headers : customHeaders}).subscribe((value)=>{
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

    getWatchlist() : Observable<MovieDto[]> {
        return this.http.get<MovieDto[]>(this.baseUrlWatchlist, {headers: this.headers});
    }

    getAllMovies() : Observable<MovieDto[]> {
        return this.http.get<MovieDto[]>(this.baseUrlMovies);
    }
}
