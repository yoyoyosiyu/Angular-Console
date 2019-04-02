import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServices {

  constructor(private http: HttpClient) { }

  public getProducts() {

    return this.http.get('http://localhost:8081/api/v2/products/');

  }

  public getProduct(id) {
    return this.http.get(`http://localhost:8081/api/v2/products/${id}`);
  }
}
