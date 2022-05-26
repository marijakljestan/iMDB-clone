import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { ChangePassword } from '../model/change-password.model';

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
    displayChangePasswordForm: boolean = false;

    changePasswordForm = new FormGroup({
        currentPassword : new FormControl('', [Validators.required, Validators.minLength(6)]),
        newPassword :     new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword : new FormControl('', [Validators.required, Validators.minLength(6)]),
    })

    constructor(private userService: UserService, private authService: AuthenticationService) { }

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
            localStorage.setItem("loggedUser", JSON.stringify(data));
        });
    }

    showChangePasswordForm(event: MouseEvent) : void{
        event.preventDefault();
        this.displayChangePasswordForm = true;
    }
}
