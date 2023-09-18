import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, CanActivate {
  errorMessage;
  form: FormGroup;
  loader: boolean;
  constructor(
    private router: Router,
    public auth: AuthService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.loader = true;
    this.form = new FormGroup({
      user_name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    this.loader = false;
  }

  login() {
    this.auth.login(this.form.value).subscribe(
      (data) => {
        let token = data.token;
        this.auth.saveToken(token);
        this.router.navigate(['/info']);
      },
      (err) => {
        this.errorMessage = true;
      }
    );
  }

  canActivate(): boolean {
    if (this.auth.getToken()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
