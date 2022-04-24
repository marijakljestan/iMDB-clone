import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/model/actor.model';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'pm-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movieId: string | any;
  movie: Movie | any;
  actors: Actor[] = [];
  recommendation: string = "More like this";
  moviesRecommended: any[] = [];
  reviews: any[] = [];
  images: string[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id')
    this.movieService.getMovieById(this.movieId).subscribe(response => this.movie = response );
    this.actors = [
      new Actor('Marlon', 'Brando', '../../../assets/images/actors/marlon-brando.jpg', 'Don Vito Corleone'),
      new Actor('Al', 'Pacino', '../../../assets/images/actors/al-pacino.jpg', 'Michael Corleone')
    ];

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

    this.reviews= [
        {
          mark: 10,
          content: `Up until today, I haven't bothered to review "The Godfather". After all, everyone pretty much knows it's one of the greatest films ever made. It's #2 on IMDb's Top 100. It won the Best Picture Oscar. And, there are nearly 1600 reviews on IMDb. So what's one more review?! Well, after completing 14,000 reviews (because I am nuts), I guess it's time I got around to reviewing a film I should have reviewed a long time ago. So, here goes....the film is perfect and only a dope wouldn't watch it. Unfortunately, IMDb requires me to say more to meet it's 10 line minimum for reviews. So, I'll point out that you do NOT need to like gangster films to enjoy this film. Yes, it's violent and nasty in spots--but it's also brilliantly written and produced from start to finish and deserves the accolades it's received.

          My advice is that instead of just watching "The Godfather" and "The Godfather: Part II", see the combined version they created for television--with additional scenes that made it a very rich experience.
          `
        },
        {
          mark: 9,
          content: `There is very little that I can add to the reviews on here, that have explained what is so wonderful about The Godfather so well. I have seen many amazing movies, as well as some clunkers, but The Godfather was beyond amazing. There are so many images, details and scenes that I seriously cannot get out of my head since watching it for the first time just nine hours ago. The Godfather is so incredibly well-made and acted that it stands out among the rest of those other amazing films I've seen, so much so I couldn't think of a single flaw, and I am struggling to think of a good enough reason to why I didn't see this film before now.`
        }
       
    ];
    this.images= [
        "../../../assets/images/cover/godfather-2.jpg",
        "../../../assets/images/cover/godfather.jpg"
    ];
  }
}
