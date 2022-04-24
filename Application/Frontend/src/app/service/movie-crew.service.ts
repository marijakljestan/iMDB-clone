import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CrewMember } from '../model/crew-member.model';

@Injectable({
  providedIn: 'root'
})
export class MovieCrewService {

    private baseUrlMovieCrew: string = environment.baseUrlMovieCrew;  

    constructor(private http: HttpClient) {}

    getMovieDirectors(id: number) : Observable<CrewMember[]> {
        return this.http.get<CrewMember[]>(this.baseUrlMovieCrew + 'directors/'+id);
    }

    getMovieWritters(id: number) : Observable<CrewMember[]> {
        return this.http.get<CrewMember[]>(this.baseUrlMovieCrew + 'writters/'+id);
    }
}
