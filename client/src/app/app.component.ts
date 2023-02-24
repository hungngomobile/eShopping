import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eShopping';
  products: any[] = [];

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get('http://localhost:9010/Catalog/GetProductsByBrandName/Adidas').subscribe({
      next:(response:any) => {
        this.products = response,
        console.log(response)
      },
      error: error=>console.log(error),
      complete:() =>{
        console.log('Catalog API call completed');
      }
    })
  }
}
