import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ImageGalleryComponent } from './shared/image-gallery/image-gallery.component';
import { MoviePageComponent } from './movies/movie-page/movie-page.component';
import { HomePageComponent } from './home/home-page.component';
import { MovieCaptionComponent } from './movies/movie-caption/movie-caption.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { ActorListComponent } from './actors/actor-list/actor-list.component';
import { MovieCommentsComponent } from './movies/movie-comments/movie-comments.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { CommentsListComponent } from './movies/comments-list/comments-list.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { SafeUrlPipe } from './movies/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavbarComponent,
    ImageGalleryComponent,
    MoviePageComponent,
    HomePageComponent,
    MovieCaptionComponent,
    MovieDetailsComponent,
    ActorListComponent,
    MovieCommentsComponent,
    UserProfileComponent,
    StarRatingComponent,
    CommentsListComponent,
    AddMovieComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
       { path: 'add-movie', component: AddMovieComponent},
       { path: 'user/:id',  component: UserProfileComponent},
       { path: 'comments/:id', component: CommentsListComponent},
       { path: 'movie/:id', component: MoviePageComponent},
       { path: 'home', component: HomePageComponent },
       { path: '',   redirectTo: 'home', pathMatch: 'full'},
       { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
