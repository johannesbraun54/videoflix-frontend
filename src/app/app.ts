import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing-component/landing-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'videoflix_frontend';
}
