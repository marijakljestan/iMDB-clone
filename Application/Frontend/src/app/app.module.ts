import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ImageGalleryComponent } from './shared/image-gallery/image-gallery.component';
import { MoviePageComponent } from './movies/movie-page/movie-page.component';
import { HomePageComponent } from './home/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavbarComponent,
    ImageGalleryComponent,
    MoviePageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
       { path: 'movie/:id', component: MoviePageComponent},
       { path: 'home', component: HomePageComponent },
       { path: '', redirectTo: 'home', pathMatch: 'full'},
       { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
