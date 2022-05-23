import { Component, OnInit } from '@angular/core';
import { MovieDto } from '../model/movie-dto.model';
import { User } from '../model/user.model';
import { MovieService } from '../service/movie.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    user: User | any;
    role: string = "";
    watchlist: MovieDto[] = [];
    reviewedByUser: MovieDto[] = [];
    newPassword: string = "";

    constructor(private userService: UserService, private movieService: MovieService) { }

    ngOnInit(): void {
        if(localStorage.getItem("loggedUser") !== null){
            this.user = JSON.parse(localStorage.getItem("loggedUser")!);
            this.role = this.user.role.name;
        }
        this.movieService.getWatchlist().subscribe(data => {
            this.watchlist = data;
            for(let movie of this.watchlist)
                movie.notInWatchlist = false;
        });
        this.movieService.getMoviesReviewedByUser(this.user.id).subscribe(data => {
            this.reviewedByUser = data;
            for(let movie of this.reviewedByUser)
                movie.notInWatchlist = true;
        });
    }

    editUser(){
        this.userService.editUser(this.user).subscribe(data =>{
            this.user = data;
            localStorage.setItem("loggedUser", JSON.stringify(data));
        });
        this.closeModal();
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
