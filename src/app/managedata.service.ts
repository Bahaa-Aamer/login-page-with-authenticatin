import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
@Injectable({
  providedIn: 'root',
})
@Injectable()
export class ManagedataService {
  constructor(private http: HttpClient, private router: Router) {}
}
