import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  data;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const token = this.auth.getToken();

    this.auth.loadData(token).subscribe((resp) => {
      this.data = resp;
    });
  }
}
