import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = environment.getApiEndpoint('/api/contacts');
  constructor(private http: HttpClient, private auth: AuthService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.auth.getToken();
    return new HttpHeaders().set('x-auth-token', token || '');
  }

  getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  getContactById(id: string): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${id}`);
  }

  addContact(contact: { sitename: string; link: string }): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact, {
      headers: this.getAuthHeaders(),
    });
  }

  updateContact(id: string, contact: { sitename: string; link: string }): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${id}`, contact, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteContact(id:string): Observable<{ msg: string }>{
    return this.http.delete<{ msg:string }>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}
