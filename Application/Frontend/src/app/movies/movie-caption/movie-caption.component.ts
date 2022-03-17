import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-caption',
  templateUrl: './movie-caption.component.html',
  styleUrls: ['./movie-caption.component.css']
})
export class MovieCaptionComponent implements OnInit {

  @Input() movie: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
