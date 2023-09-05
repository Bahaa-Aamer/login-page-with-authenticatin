import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token = this.saveToken;

  constructor(private router: Router, private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(
      'https://backend-dev.ke.boyot.app/api/users/login',
      data
    );
  }

  saveToken(token: string) {
    return localStorage.setItem('token', token);
  }

  isLoggedIn() {
    return localStorage.getItem('token');
  }

  loadData(token: string) {
    return this.http.get('https://backend-dev.ke.boyot.app/api/users/login', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
