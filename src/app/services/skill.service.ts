import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Skill } from '../models/skill.model'; // We'll create this model next

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = '/api/skills';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('x-auth-token', token || '');
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl);
  }

  addSkill(skill: { name: string, category: string }): Observable<Skill> {
    return this.http.post<Skill>(this.apiUrl, skill, { headers: this.getAuthHeaders() });
  }

  deleteSkill(id: string): Observable<{ msg: string }> {
    return this.http.delete<{ msg:string }>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}
