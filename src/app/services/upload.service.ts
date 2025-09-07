import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
 private apiUrl = environment.getApiEndpoint('/api/projects');

  constructor(private http: HttpClient, private authService: AuthService) {}

  uploadImage(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('image', file);

    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('x-auth-token', token || '');

    // The API returns an object { imageUrl: '...' }, so we use map to extract the URL string
    return this.http.post<{ imageUrl: string }>(this.apiUrl, formData, { headers })
      .pipe(
        map(response => response.imageUrl)
      );
  }
}
