import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  message = '';
  data: string[] = [];

  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http
      .get<string[]>('http://localhost:8080/auth/data')
      .subscribe({
        next: res => {
          this.data = res;
          this.message = '✅ Données chargées depuis API sécurisée';
        },
        error: () => (this.message = '🚫 Accès refusé (JWT invalide ou manquant)'),
      });
  }

  logout() {
    this.auth.logout();
    this.message = '🚪 Déconnecté';
  }
}
