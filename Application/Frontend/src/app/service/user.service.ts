import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrlUsers: string = environment.baseUrlUsers;

  customHeaders = new HttpHeaders({'Content-Type' : 'application/json',
             'Authorization' : `Bearer ${localStorage.jwt}`})

  constructor(private httpClient : HttpClient) {}

    getLoggedUser() : Observable<User> {
        return this.httpClient.get<User>(this.baseUrlUsers + "whoami", {headers : this.customHeaders});
    }

    logout() {
        localStorage.clear();
    }

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
