import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:4000/products';
  constructor(private http: HttpClient) { }

  addProduct(products){
    console.log('tata', products);
    this.http.post(`${this.uri}/add`,products).subscribe(res => console.log('Done', res))
  }
}
