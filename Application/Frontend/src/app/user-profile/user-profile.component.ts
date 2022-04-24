import { Component, OnInit } from '@angular/core';
import { MovieDto } from '../model/movie-dto.model';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  watchlist: MovieDto[] = [];
  newPassword: string = "";

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    //setTimeout(() => {
        if(localStorage.getItem("loggedUser") !== null)
            this.user = JSON.parse(localStorage.getItem("loggedUser")!);
     //}, 50);
        this.movieService.getWatchlist().subscribe(data => {
            this.watchlist = data;
            for(let movie of this.watchlist)
                movie.notInWatchlist = false;
        });
  }

  showChangePasswordForm(event: MouseEvent) : void{
    event.preventDefault();
    (document.querySelector('.password') as HTMLElement).style.display = 'block';
  }

  editProfile(event: MouseEvent) : void{
    event.preventDefault();
    (document.querySelector('#edit-profile-modal') as HTMLElement).style.display = 'flex';
  }

  closeModal() : void{
    (document.querySelector('.password') as HTMLElement).style.display = 'none';
    (document.querySelector('#edit-profile-modal') as HTMLElement).style.display = 'none';
  }
}
