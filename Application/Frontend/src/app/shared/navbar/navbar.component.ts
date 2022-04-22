import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/model/authentication.model';
import { User } from 'src/app/model/user.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
    title : string = 'CINEMATIC';
    loggedUser: User | any;
    user: string = '';
    newUser: User = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };
    loginCredentials: Authentication = {
        email: '',
        password: ''
    };
    searchParam: string = "";
    @Output() displaySearchResults = new EventEmitter<string>();
    @Input() searchResults: any[] = [];

    constructor(private userService: UserService, private authSerive: AuthenticationService, private router: Router) {}

    ngOnInit(): void {
        if(localStorage.getItem("loggedUser") !== null)
            this.loggedUser = JSON.parse(localStorage.getItem("loggedUser")!);
    }

    ngOnChange() : void {
        if(localStorage.getItem("loggedUser") !== null)
            this.loggedUser = JSON.parse(localStorage.getItem("loggedUser")!);
    }

    registerUser(event: MouseEvent){
        event.preventDefault();
        this.userService.registerUser(this.newUser);
    }

    async logUser() {
        this.authSerive.login(this.loginCredentials);
        await this.userService.getLoggedUser().subscribe(data => { 
            this.loggedUser = data;
        });
        this.closeLoginModal();
    }

    onAddSearchParam() {
        this.displaySearchResults.emit(this.searchParam);
    }

    onFocusLost($event: Event) : void {
        this.searchParam = "";
        this.searchResults = [];
    }

    logout(event: MouseEvent): void {
        event.preventDefault();
        this.loggedUser = null;
        this.userService.logout();
        this.router.navigate(['/homePage']);
    }

    openLoginModal(event: MouseEvent): void {
       event.preventDefault();
       (document.querySelector('#log-in-modal') as HTMLElement).style.display = 'flex';
    }

    openSignUpModal(event: MouseEvent): void {
        event.preventDefault();
        (document.querySelector('#sign-up-modal') as HTMLElement).style.display = 'flex';
    }

    closeLoginModal() : void{
        (document.querySelector('#log-in-modal') as HTMLElement).style.display = 'none';
    }

    closeSignupModal() : void{
        (document.querySelector('#sign-up-modal') as HTMLElement).style.display = 'none';
    }
}
