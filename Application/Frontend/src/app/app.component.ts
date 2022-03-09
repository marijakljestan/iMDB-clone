import { Component } from '@angular/core';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'CINEMATIC';
}
