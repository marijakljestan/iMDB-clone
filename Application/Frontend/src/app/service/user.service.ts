import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrlUsers: string = environment.baseUrlUsers;
  constructor(private httpClient : HttpClient) {}

  registerUser(user: User){
    return this.httpClient.post<User>(this.baseUrlUsers, user).subscribe((value)=>{
        Swal.fire({
          title: 'Success!',
          text: 'You successfully registered, check your email!',
          icon: 'success',
          confirmButtonText: 'OK',
          position: 'top-right'
        });
        //this.router.navigate(['/login']);
      }, (error)=>{
          Swal.fire({
              title: 'Ooops',
              text: 'Already exists user with this email!',
              icon: 'error',
              confirmButtonText: 'OK',
              position: 'top-right'
            });
      })
  }
}
