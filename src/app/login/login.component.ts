import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  constructor(private auth: AuthService, private http: HttpClient) {}

  login() {
    this.message = '...';
    this.auth.login(this.username, this.password).subscribe({
      next: () => (this.message = '✅ Connecté — token sauvegardé'),
      error: err => (this.message = '❌ Erreur: ' + (err?.error || err.statusText)),
    });
  }

  getHello() {
    this.http
      .get('http://localhost:8080/auth/hello', { responseType: 'text' })
      .subscribe({
        next: res => (this.message = res),
        error: () => (this.message = '🚫 Non autorisé — token manquant ou invalide'),
      });
  }

  logout() {
    this.auth.logout();
    this.message = '🚪 Déconnecté';
  }
}
