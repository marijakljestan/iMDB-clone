import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDto } from '../model/movie-dto.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    private baseUrlMovies: string = environment.baseUrlMovie;
    private movies: MovieDto[] = [];

    constructor(private http: HttpClient) {}

    getAllMovies() : Observable<MovieDto[]> {
        return this.http.get<MovieDto[]>(this.baseUrlMovies);
    }

   /* async getAllMovies() {
        let promise1 = await new Promise((resolve, reject) => {
            this.http.get<MovieDto[]>(this.baseUrlMovies).toPromise()
            .then((res: any) => {
                this.movies = res.map((response: any) => {
                  return new MovieDto(response.id, response.name, response.year, response.coverImage, response.averageGrade);
                });
            });
       //const promise = await this.http.get<MovieDto[]>(this.baseUrlMovies).toPromise();
        });
    }*/
}
