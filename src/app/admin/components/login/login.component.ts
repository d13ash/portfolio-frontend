import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.error = null;
    this.authService.login(this.credentials).subscribe({
      next: () => {
        // On success, navigate to the admin dashboard
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        this.error = 'Login failed. Please check your username and password.';
        console.error('Login error', err);
      }
    });
  }
}
