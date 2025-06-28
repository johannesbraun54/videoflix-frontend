import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-component',
  imports: [RouterModule, FormsModule],
  templateUrl: './landing-component.html',
  styleUrl: './landing-component.scss'
})
export class LandingComponent {
  
  emailForSignUp: string = '';
  
  constructor() { 
    // Initialization logic can go here if needed
  }

  routeToSignUp() {
    console.log('Sign Up clicked with email:', this.emailForSignUp);
  }
}
