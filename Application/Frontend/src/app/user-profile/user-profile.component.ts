import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  newPassword: string = "";

  constructor() { }

  ngOnInit(): void {
    /*this.user = {
      id: 1,
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@gmail.com',
      watchlist: [
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
          id: 10,
          name: 'Pulp Fiction',
          averageGrade : 8.5,
          image: "../../../assets/images/pulp fiction.jpg",
          year: 1994
        }
      ]
    }*/
    setTimeout(() => {
        this.user = JSON.parse(localStorage.getItem("loggedUser")!);
     }, 50);
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
