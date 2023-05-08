import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  faPlus = faPlus

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/add-assignment'])
  }
}
