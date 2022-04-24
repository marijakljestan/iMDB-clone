import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../model/review.model';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewService {

    private baseUrlReview: string = environment.baseUrlMovieReview;

    headers = new HttpHeaders({'Content-Type' : 'application/json',
                               'Authorization' : `Bearer ${localStorage.jwt}`});

    constructor(private http: HttpClient) {}

    addReview(review: Review): Observable<Review[]> {
        return this.http.post<Review[]>(this.baseUrlReview, review, {headers: this.headers});
    }

    getMovieReviews(movieId: number): Observable<Review[]> {
        return this.http.get<Review[]>(this.baseUrlReview + movieId);
    }
}
