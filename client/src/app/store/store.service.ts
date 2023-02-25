import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { StoreParams } from '../shared/models/storeParams';
import { IType } from '../shared/models/type';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:9010/';

  getProducts(storeParams: StoreParams){
    let params = new HttpParams();
    if(storeParams.brandId){
      params = params.append('brandId', storeParams.brandId);
    }
    if(storeParams.typeId){
      params = params.append('typeId', storeParams.typeId);
    }

    params = params.append('sort', storeParams.sort);

    return this.http.get<IPagination<IProduct[]>>(this.baseUrl+'Catalog/GetAllProducts', {params});
  }
  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl+'Catalog/GetAllBrands');
  }
  getTypes(){
    return this.http.get<IType[]>(this.baseUrl+'Catalog/GetAllTypes');
  }
}
