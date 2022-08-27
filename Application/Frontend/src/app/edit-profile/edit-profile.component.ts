import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { AuthenticationService } from '../service/authentication.service';
import { ChangePassword } from '../model/change-password.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
    user: User | any;
    role: string = "";
    changePasswordDto: ChangePassword = {
        email: "",
        currentPassword: "",
        newPassword: ""
    }
    confirmPassword: string = "";
    displayChangePasswordForm: boolean = false;

    constructor(private userService: UserService, private authService: AuthenticationService, private router : Router) { }

    ngOnInit(): void {
        if(localStorage.getItem("loggedUser") !== null){
            this.user = JSON.parse(localStorage.getItem("loggedUser")!);
            this.role = this.user.role.name;
        }
    }

    changePassword() {
        this.changePasswordDto.email = this.user.email;
        this.authService.changePassword(this.changePasswordDto);
    }

    editUser(){
        this.userService.editUser(this.user).subscribe(data =>{
            this.user = data;
            Swal.fire({
                title: 'Success!',
                text: 'Your personal information is successfully edited!',
                icon: 'success',
                confirmButtonText: 'OK',
                position: 'top-right'
            });
            localStorage.setItem("loggedUser", JSON.stringify(data));
            this.router.navigate(['/user'])
        });
    }

    showChangePasswordForm(event: MouseEvent) : void{
        event.preventDefault();
        this.displayChangePasswordForm = true;
    }
}