import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AccountService } from 'src/app/shared/account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  account = {
    email: '',
    nume: '',
    prenume: '',
    phone: '',
    linkedin: '',
    school: '',
    address: ''
  }
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.accountService.getUser().subscribe(data => {
      this.account = data[0];
    })
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.account = {
      email: form.value.email,
      nume: form.value.nume,
      prenume: form.value.prenume,
      linkedin: form.value.linkedin,
      phone: form.value.phone,
      school: form.value.school,
      address: form.value.address,
    };

    this.accountService.updateUser(this.account).subscribe(data => {
      console.log(data);
    });
  }

}
