import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = { email: '', password: '' };
  constructor(private us: UsersService, private router: Router) {}

  ngOnInit(): void {}

  submitRegister() {
    this.us
      .register(this.user)
      .then((data) => {
        console.log(data.user.email);
        this.us.setSessionData('isLoggedIn', 'true');
        this.us.setSessionData('email', data.user.email as string);
        this.router.navigateByUrl('home');
      })
      .catch((error) => {
        alert('Wrong email or password');
        console.log(error);
        this.user = { email: '', password: '' };
      });
  }
}
