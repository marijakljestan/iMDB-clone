import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'movie-caption',
  templateUrl: './movie-caption.component.html',
  styleUrls: ['./movie-caption.component.css']
})
export class MovieCaptionComponent implements OnInit {

  @Input() movie: any = {};

  constructor() { }

  ngOnInit(): void {}
}
