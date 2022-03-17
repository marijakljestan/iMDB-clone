import { Component} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title : string = 'CINEMATIC';

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
