import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actor } from '../model/actor.model';
import { CrewMember } from '../model/crew-member.model';

@Injectable({
  providedIn: 'root'
})
export class MovieCrewService {

    private baseUrlMovieCrew: string = environment.baseUrlMovieCrew;  
    private baseUrlActor: string = environment.baseUrlActor;

    constructor(private http: HttpClient) {}

    getMovieActors(id: number) : Observable<Actor[]> {
        return this.http.get<Actor[]>(this.baseUrlActor + +id);
    }

    getMovieDirectors(id: number) : Observable<CrewMember[]> {
        return this.http.get<CrewMember[]>(this.baseUrlMovieCrew + 'directors/'+id);
    }

    getMovieWritters(id: number) : Observable<CrewMember[]> {
        return this.http.get<CrewMember[]>(this.baseUrlMovieCrew + 'writters/'+id);
    }

    getAllActors() : Observable<Actor[]> {
        return this.http.get<Actor[]>(this.baseUrlActor);
    }

    getAllDirectors() : Observable<CrewMember[]> {
        return this.http.get<CrewMember[]>(this.baseUrlMovieCrew + 'directors');
    }

    getAllWritters() : Observable<CrewMember[]> {
        return this.http.get<CrewMember[]>(this.baseUrlMovieCrew + 'writters');
    }
}
