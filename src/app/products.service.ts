import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:4000/products';
  constructor(private http: HttpClient) { }

  addProduct(products) {
    console.log('tata', products);
    this.http.post(`${this.uri}/add`, products).subscribe(res => console.log('Done', res))
  }

  getProducts() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editProduct(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }
  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  dP(id){
    console.log('serv', id);
    let x = this.http.get(`${this.uri}/delete/${id}`);
    console.log(x);
    return x;
  }
}
