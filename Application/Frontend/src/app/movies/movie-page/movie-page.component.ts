import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieCrewService } from 'src/app/service/movie-crew.service';
import { MovieReviewService } from 'src/app/service/movie-review.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'pm-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movieId: string | any;
  movie: Movie | any;
  recommendation: string = "More like this";
  moviesRecommended: any[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService, 
              private movieCrewService: MovieCrewService, private movieReviewService: MovieReviewService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id')
    this.movieService.getMovieById(this.movieId).subscribe(response => {
        this.movie = response ;
        this.movieCrewService.getMovieDirectors(this.movieId).subscribe(data => this.movie.directors = data);
        this.movieCrewService.getMovieWritters(this.movieId).subscribe(data =>  this.movie.writters = data);
        this.movieCrewService.getMovieActors(this.movieId).subscribe(data => this.movie.actors = data);
        this.movieReviewService.getMovieReviews(this.movieId).subscribe(data => this.movie.reviews = data);
    });

    this.moviesRecommended = [
      {
        id: 1,
        name: 'The Godfather',
        averageGrade : 9.1,
        coverImage: "../../../assets/images/godfather.jpg",
        year: 1972
      },
      {
        id: 2,
        name: 'The Dark Knight',
        averageGrade : 8.8,
        coverImage: "../../../assets/images/dark-knight.jfif",
        year: 2008
      },
      {
        id: 3,
        name: 'Fight club',
        averageGrade : 8.7,
        coverImage: "../../../assets/images/fight-club.jpg",
        year: 1999
      },
      {
        id: 13,
        name: 'Inception',
        averageGrade : 8.6,
        coverImage: "../../../assets/images/inception.jpg",
        year: 2010
      },
      {
        id: 10,
        name: 'Pulp Fiction',
        averageGrade : 8.5,
        coverImage: "../../../assets/images/pulp fiction.jpg",
        year: 1994
      }
    ];
  }
}
