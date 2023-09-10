import { Injectable, OnInit } from '@angular/core';
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
export class AuthService implements OnInit {
  token;

  constructor(private router: Router, private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(
      'https://backend-dev.ke.boyot.app/api/users/login',
      data
    );
  }

  ngOnInit(): void {}

  saveToken(token: string) {
    return localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loadData(token): Observable<any> {
    return this.http.get(
      'https://backend-dev.kw.boyot.app/api/contracts/user/3503?page=1&data.per_page=10',
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
