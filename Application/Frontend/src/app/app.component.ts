import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topRatedList: any[] = [];
  watchList: any[] = [];
  trendingList: any[] = [];

  ngOnInit() : void {
    this.topRatedList = [
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

    this.trendingList = [
      {
        name: 'Shawshank Redemption',
        averageGrade : 9.2,
        image: "../../../assets/images/shawshank.jfif"
      },
      {
        name: "Schindler's List",
        averageGrade : 8.7,
        image: "../../../assets/images/schindler.jpg"
      },
      {
        name: 'Pulp Fiction',
        averageGrade : 8.5,
        image: "../../../assets/images/pulp fiction.jpg"
      },
      {
        name: 'Joker',
        averageGrade : 8.3,
        image: "../../../assets/images/joker.jpg"
      },
      {
        name: 'Shutter Island',
        averageGrade : 8.1,
        image: "../../../assets/images/shutter.jfif"
      }
    ];
  }
}
