import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-comments',
  templateUrl: './movie-comments.component.html',
  styleUrls: ['./movie-comments.component.css']
})
export class MovieCommentsComponent implements OnInit {
  @Input() reviews: any[] = [];
  title: string = 'User reviews';

  constructor() { }

  ngOnInit(): void {
  }

}
