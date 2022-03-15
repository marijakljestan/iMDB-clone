import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movie: any = {};

  constructor() { }

  ngOnInit(): void {
    this.movie = {
      id: 1,
      name: 'The Godfather',
      averageGrade : 9.1,
      images: [
        "../../../assets/images/cover/godfather-2.jpg",
        "../../../assets/images/cover/godfather.jpg"
      ],
      genre: [
        'Action', 'Drama', 'Crime'
      ],
      year: 1972,
      directors: ['Francis Ford Coppola'],
      writters: ['Mario Puzo', 'Francis Ford Coppola'],
      actors: ['Marlon Brando', 'Al Pacino', 'James Caan']
    };
  }

}
