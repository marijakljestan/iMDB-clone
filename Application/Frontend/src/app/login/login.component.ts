import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '../model/authentication.model';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginCredentials: Authentication = {
        email: '',
        password: ''
    };

    loginForm = new FormGroup({
        email : new FormControl('',[Validators.required, Validators.email]),
        password : new FormControl('', [Validators.required, Validators.minLength(6)])
     })
     constructor(private userService: UserService, private authSerive: AuthenticationService, private router: Router) {}
    
    ngOnInit(): void {}
    
    async onLogin(){
        this.authSerive.login(this.loginCredentials);
    }
}