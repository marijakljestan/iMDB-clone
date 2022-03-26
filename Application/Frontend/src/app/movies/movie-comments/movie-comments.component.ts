import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review.model';

@Component({
  selector: 'movie-comments',
  templateUrl: './movie-comments.component.html',
  styleUrls: ['./movie-comments.component.css']
})
export class MovieCommentsComponent implements OnInit {
  @Input() movie: any = {};
  @Input() reviews: Review[] = [];
  newRate: number = 0;

  ngOnInit(): void {}

  addComment(event: MouseEvent) : void{
    event.preventDefault();
    (document.querySelector('#add-comment-modal') as HTMLElement).style.display = 'flex';
  }

  closeModal() : void{
    this.newRate = 0;
    (document.querySelector('#add-comment-modal') as HTMLElement).style.display = 'none';
  }
}
