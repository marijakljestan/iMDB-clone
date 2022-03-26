import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  title : string = 'CINEMATIC';
  loggedUser: any;
  searchParam: string = "";
  @Output() displaySearchResults = new EventEmitter<string>();
  @Input() searchResults: any[] = [];

  ngOnInit(): void {}

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
