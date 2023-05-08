import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { faPenSquare } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isButtonOpen: boolean = true;
  faPenSquare = faPenSquare;

  constructor(private router: Router) {}
}
