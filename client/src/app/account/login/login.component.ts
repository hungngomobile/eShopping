import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcntService } from '../acnt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = "Login";
  returnUrl: string;
  constructor(private activatedRoute: ActivatedRoute, private acntService: AcntService) { }
  ngOnInit(): void {
    // this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/checkout';
    // this.login();
  }


  login(){
    this.acntService.login();
  }

}
