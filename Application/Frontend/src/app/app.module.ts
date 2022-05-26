import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';

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
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchMoviesComponent } from './shared/search-movies/search-movies.component';

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
    SafeUrlPipe,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    SearchMoviesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    Ng2CompleterModule,
    HttpClientModule, 
    [SweetAlert2Module.forRoot()],
    RouterModule.forRoot([
       { path: 'add-movie', component: AddMovieComponent},
       { path: 'user',  component: UserProfileComponent},
       { path: 'comments/:id', component: CommentsListComponent},
       { path: 'movie/:id', component: MoviePageComponent},
       { path: 'home', component: HomePageComponent },
       { path: 'register', component: RegisterComponent },
       { path: 'login', component: LoginComponent },
       { path: 'landing-page', component: LandingPageComponent },
       { path: '',   redirectTo: 'landing-page', pathMatch: 'full'},
       { path: '**', redirectTo: 'landing-page', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
