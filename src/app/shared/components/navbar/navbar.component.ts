import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: any = {};
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.accountService.getUser().subscribe(data => {
      console.log(data[0]);
      this.user = data[0];
    })
  }


}
