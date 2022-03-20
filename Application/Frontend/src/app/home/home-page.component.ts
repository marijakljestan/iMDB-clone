import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  topRatedList: any[] = [];
  watchList: any[] = [];
  trendingList: any[] = [];
  images: string[] = [];
  searchParam: string = "";

  ngOnInit() : void {
    this.topRatedList = [
      {
        id: 1,
        name: 'The Godfather',
        averageGrade : 9.1,
        image: "../../../assets/images/godfather.jpg",
        year: 1972
      },
      {
        id: 2,
        name: 'The Dark Knight',
        averageGrade : 8.8,
        image: "../../../assets/images/dark-knight.jfif",
        year: 2008
      },
      {
        id: 3,
        name: 'Fight club',
        averageGrade : 8.7,
        image: "../../../assets/images/fight-club.jpg",
        year: 1999
      },
      {
        id: 13,
        name: 'Inception',
        averageGrade : 8.6,
        image: "../../../assets/images/inception.jpg",
        year: 2010
      },
      {
        id: 4,
        name: 'Life is beautiful',
        averageGrade : 8.5,
        image: "../../../assets/images/lavitaebella.jpg",
        year: 1997
      },
      {
        id: 5,
        name: "Schindler's List",
        averageGrade : 8.7,
        image: "../../../assets/images/schindler.jpg",
        year: 1993
      },
      {
        id: 6,
        name: 'Pulp Fiction',
        averageGrade : 8.5,
        image: "../../../assets/images/pulp fiction.jpg",
        year: 1994
      },
      {
        id: 7,
        name: 'Joker',
        averageGrade : 8.3,
        image: "../../../assets/images/joker.jpg",
        year: 2019
      }
    ];

    this.trendingList = [
      {
        id: 8,
        name: 'Shawshank Redemption',
        averageGrade : 9.2,
        image: "../../../assets/images/shawshank.jfif",
        year: 1994
      },
      {
        id: 9,
        name: "Schindler's List",
        averageGrade : 8.7,
        image: "../../../assets/images/schindler.jpg",
        year: 1993
      },
      {
        id: 10,
        name: 'Pulp Fiction',
        averageGrade : 8.5,
        image: "../../../assets/images/pulp fiction.jpg",
        year: 1994
      },
      {
        id: 11,
        name: 'Joker',
        averageGrade : 8.3,
        image: "../../../assets/images/joker.jpg",
        year: 2019
      },
      {
        id: 12,
        name: 'Shutter Island',
        averageGrade : 8.1,
        image: "../../../assets/images/shutter.jfif",
        year: 2010
      }
    ];

    this.images = [
      "../../../assets/images/cover/batman.jpg",
      "../../../assets/images/cover/dark-knight.jpg",
      "../../../assets/images/cover/fight-club.jpg",
      "../../../assets/images/cover/inception.jpg",
      "../../../assets/images/cover/la-vitta-e-bella.jpg",
      "../../../assets/images/cover/godfather.jpg"
    ];
  }
}
