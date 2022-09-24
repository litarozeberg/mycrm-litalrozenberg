import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' };
  constructor(private us: UsersService, private router: Router) {}

  ngOnInit(): void {}

  submitLogin(): void {
    this.us
      .login(this.user)
      .then((data) => {
        console.log(data.user.email);
        this.us.setSessionData('isLoggedIn', 'true');
        this.us.setSessionData('email', data.user.email as string);
        this.router.navigateByUrl('show-customers');
      })
      .catch((err) => {
        alert('Wrong email or password');
        console.log(err);
        this.user = { email: '', password: '' };
      });
  }

  submitLoginWithGoogle(): void {
    this.us
      .loginWithGoogle()
      .then((data) => {
        console.log(data.user.displayName);
        this.us.setSessionData('isLoggedIn', 'true');
   this.us.setSessionData('email', data.user.email as string);
        this.router.navigateByUrl('show-customers');
      })
      .catch((err) => {
        alert('Wrong google account');
        this.user = { email: '', password: '' };
      });
  }
}
