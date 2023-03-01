import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = "Login";
  constructor(private accountService: AccountService) { }
  ngOnInit(): void {
    this.login();
  }


  login(){
    this.accountService.login();
  }

}
