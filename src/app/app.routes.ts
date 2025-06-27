import { Routes } from '@angular/router';
import { LandingComponent } from './landing-component/landing-component';
import { SignUp } from './sign-up/sign-up';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'signup', component: SignUp},
    { path: 'login', component: Login },
];
