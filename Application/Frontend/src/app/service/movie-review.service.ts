import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../model/review.model';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewService {

    private baseUrlReview: string = environment.baseUrlMovieReview;

    constructor(private http: HttpClient) {}

    getMovieReviews(movieId: number): Observable<Review[]> {
        return this.http.get<Review[]>(this.baseUrlReview + movieId);
    }
}
