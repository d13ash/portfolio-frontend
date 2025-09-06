import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Achievement } from '../models/achievement.model'; // We'll create this next

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  private apiUrl = '/api/achievements';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('x-auth-token', token || '');
  }

  getAchievements(): Observable<Achievement[]> {
    return this.http.get<Achievement[]>(this.apiUrl);
  }

  addAchievement(achievement: Achievement): Observable<Achievement> {
    return this.http.post<Achievement>(this.apiUrl, achievement, { headers: this.getAuthHeaders() });
  }

  deleteAchievement(id: string): Observable<{ msg: string }> {
    return this.http.delete<{ msg: string }>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}
