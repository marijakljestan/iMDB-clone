import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieCrewService } from 'src/app/service/movie-crew.service';
import { MovieReviewService } from 'src/app/service/movie-review.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
    movieId: string | any;
    movie: Movie | any;
    reviews: any[] = [];

    constructor(private route: ActivatedRoute, private movieService: MovieService, 
                private movieCrewService: MovieCrewService, private movieReviewService: MovieReviewService) {}

    ngOnInit(): void {
        this.movieId = this.route.snapshot.paramMap.get('id')
        this.movieService.getMovieById(this.movieId).subscribe(response => {
            this.movie = response ;
            this.movieCrewService.getMovieDirectors(this.movieId).subscribe(data => this.movie.directors = data);
            this.movieCrewService.getMovieWritters(this.movieId).subscribe(data =>  this.movie.writters = data);
            this.movieCrewService.getMovieActors(this.movieId).subscribe(data => this.movie.actors = data);
            this.movieReviewService.getMovieReviews(this.movieId).subscribe(data => this.movie.reviews = data);
        });
    }
}
