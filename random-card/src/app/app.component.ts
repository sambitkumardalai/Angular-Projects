import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'random-card';
  user: any;
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.userService.getUser().subscribe({
      complete: () => console.log('complete'),
      error(err: any): void {
        console.log(err);
      },
      next: (user:any) => {
          this.user = user.results[0];
          console.log(this.user);
      },
    });
  }
}
