import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
    user: User | any;
    role: string = "";
    newPassword: string = "";
    displayChangePasswordForm: boolean = false;

    changePasswordForm = new FormGroup({
        currentPassword : new FormControl('', [Validators.required, Validators.minLength(6)]),
        newPassword :     new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword : new FormControl('', [Validators.required, Validators.minLength(6)]),
    })

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        if(localStorage.getItem("loggedUser") !== null){
            this.user = JSON.parse(localStorage.getItem("loggedUser")!);
            this.role = this.user.role.name;
        }
    }

    changePassword() {

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
