import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Simple demo login - no localStorage
    const demoCredentials = [
      { email: 'admin', password: 'admin' },
      { email: 'demo@example.com', password: 'demo123' },
      { email: 'user@test.com', password: 'password' }
    ];

    const isValid = demoCredentials.some(cred =>
      cred.email === this.credentials.email.trim() &&
      cred.password === this.credentials.password
    );

    if (isValid) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials! Try:\n- admin.com / admin\n- demo@example.com / demo123\n- user@test.com / password');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}