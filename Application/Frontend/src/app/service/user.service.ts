import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private baseUrlUsers: string = environment.baseUrlUsers;

    headers = new HttpHeaders({'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${localStorage.jwt}`})

    constructor(private http : HttpClient, private router : Router) {}

        getLoggedUser() : Observable<User> {
            return this.http.get<User>(this.baseUrlUsers + "whoami", {headers : this.headers});
        }

        logout() {
            localStorage.clear();
        }

        editUser(user: User) : Observable<User>{
            return this.http.put<User>(this.baseUrlUsers, user, {headers: this.headers});
        }

        registerUser(user: User){
            return this.http.post<User>(this.baseUrlUsers, user).subscribe((value)=>{
                Swal.fire({
                title: 'Success!',
                text: 'You successfully registered!',
                icon: 'success',
                confirmButtonText: 'OK',
                position: 'top-right'
                });
                this.router.navigate(['/login']);
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
