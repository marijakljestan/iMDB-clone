import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pm-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  @Input() movies : any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.movies = [
      {
        name: 'The Godfather',
        averageGrade : 9.1,
        image: "../../../assets/images/godfather.jpg"
      },
      {
        name: 'The Dark Knight',
        averageGrade : 8.8,
        image: "../../../assets/images/dark-knight.jfif"
      },
      {
        name: 'Fight club',
        averageGrade : 8.7,
        image: "../../../assets/images/fight-club.jpg"
      },
      {
        name: 'Inception',
        averageGrade : 8.6,
        image: "../../../assets/images/inception.jpg"
      },
      {
        name: 'Life is beautiful',
        averageGrade : 8.5,
        image: "../../../assets/images/lavitaebella.jpg"
      },
    ];
  }

}
