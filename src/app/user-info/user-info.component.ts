import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  data;
  loader: boolean = true;
  page: any = 1;
  total: any;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    const url = `page=${this.page}&data.per_page=1`;
    this.auth.loadData(url).subscribe((resp) => {
      this.data = resp.data.data;
      this.page = resp?.data?.current_page;
      this.total = resp?.data?.total;
      this.loader = false;
    });
  }
  pageChanged(ev) {
    console.log('ev', ev);
    this.page = ev;
    this.loadData();
  }
}
