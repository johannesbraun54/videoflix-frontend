import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/authService/auth-service';

@Component({
  selector: 'app-landing-component',
  imports: [RouterModule, FormsModule],
  templateUrl: './landing-component.html',
  styleUrl: './landing-component.scss'
})
export class LandingComponent {

  emailForSignUp: string = '';
  
  constructor(private authService: AuthService) { 
    this.authService
  }

  routeToSignUp() {
    console.log('Sign Up clicked with email:', this.emailForSignUp);
    this.authService.http.post('/api/signup', { email: this.emailForSignUp }).subscribe(response => {
      console.log('reponse is:', response);
    })
  }
}
