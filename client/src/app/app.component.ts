import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eShopping';
  products: IProduct[] = [];

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<IPagination<IProduct[]>>('http://localhost:9010/Catalog/GetAllProducts').subscribe({
      next:response => {
        this.products = response.data,
        console.log(response)
      },
      error: error=>console.log(error),
      complete:() =>{
        console.log('Catalog API call completed');
      }
    })
  }
}
