import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  title : string = 'CINEMATIC';
  loggedUser: any;
  newUser: User = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
  }
  searchParam: string = "";
  @Output() displaySearchResults = new EventEmitter<string>();
  @Input() searchResults: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  registerUser(event: MouseEvent){
      event.preventDefault();
      this.userService.registerUser(this.newUser);
  }

  onAddSearchParam() {
    this.displaySearchResults.emit(this.searchParam);
  }

  onFocusLost($event: Event) : void {
    this.searchParam = "";
    this.searchResults = [];
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

  logUser() : void{
    this.loggedUser = {
      id: 1,
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@gmail.com',
      role: 'ADMIN'
    }
    this.closeLoginModal();
  }
}
