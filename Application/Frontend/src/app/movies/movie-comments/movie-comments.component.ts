import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review.model';
import { MovieReviewService } from 'src/app/service/movie-review.service';

@Component({
  selector: 'movie-comments',
  templateUrl: './movie-comments.component.html',
  styleUrls: ['./movie-comments.component.css']
})
export class MovieCommentsComponent implements OnInit {
    @Input() movie: any = {};
    @Input() reviews: Review[] = [];
    newReview: Review = {
        mark: 0,
        content: '',
        movieId: this.movie.id
    };
    newRate: number = 0;

    constructor(private reviewService: MovieReviewService) {}

    ngOnInit(): void {}

    submitReview() {
        this.newReview.mark = this.newRate;
        this.newReview.movieId = this.movie.id;
        this.reviewService.addReview(this.newReview).subscribe(data => this.movie.reviews = data);
    }

    addComment(event: MouseEvent) : void{
        event.preventDefault();
        (document.querySelector('#add-comment-modal') as HTMLElement).style.display = 'flex';
    }

    closeModal() : void{
        this.newRate = 0;
        (document.querySelector('#add-comment-modal') as HTMLElement).style.display = 'none';
    }
}
