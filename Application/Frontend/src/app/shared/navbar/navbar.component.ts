import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
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
   
    searchParam: string = "";
    /*@Output() displaySearchResults = new EventEmitter<string>();
    @Input() searchResults: any[] = [];*/

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit(): void {
        if(localStorage.getItem("loggedUser") !== null)
            this.loggedUser = JSON.parse(localStorage.getItem("loggedUser")!);
    }

    ngOnChange() : void {
        if(localStorage.getItem("loggedUser") !== null)
            this.loggedUser = JSON.parse(localStorage.getItem("loggedUser")!);
    }

    logout(event: MouseEvent): void {
        event.preventDefault();
        this.loggedUser = null;
        this.userService.logout();
        this.router.navigate(['/homePage']);
    }
}
