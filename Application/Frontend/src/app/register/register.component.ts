import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    newUser: User = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    registerForm = new FormGroup({
        firstName : new FormControl('',[Validators.required, Validators.minLength(2)]),
        lastName : new FormControl('', [Validators.required, Validators.minLength(2)]),
        email : new FormControl('',[Validators.required, Validators.email]),
        password : new FormControl('', [Validators.required, Validators.minLength(6)]),
    })

    constructor(private userService: UserService) {}

    ngOnInit(): void {}

    onRegister(){  this.userService.registerUser(this.newUser); }
}
