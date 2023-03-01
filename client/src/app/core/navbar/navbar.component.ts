import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public basketService: BasketService, private accountService: AccountService){}
  ngOnInit(): void {
    this.accountService.loginChanged.subscribe({
      next:(res)=>{
        this.isUserAuthenticated = res;
        console.log(this.isUserAuthenticated);
      },error:(err) =>{
        console.log(`An error occurred while setting isUserAuthenticated flag.`)
      }
    })
    console.log(`current user:`);
  }
  public isUserAuthenticated: boolean = false;
  getBasketCount(items: IBasketItem[]){
    return items.reduce((sum, item)=>sum + item.quantity, 0);
  }
  public login = () => {
    this.accountService.login();
  }
  public logout = () => {
    this.accountService.logout();
  }
}
