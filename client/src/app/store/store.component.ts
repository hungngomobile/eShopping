import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private storeService: StoreService){}

  ngOnInit(): void {
    this.storeService.getProducts().subscribe({
      next: response =>this.products = response.data,
      error: error =>console.log(error)
    });
  }
}
