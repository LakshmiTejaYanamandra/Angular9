import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import  Product from '../../model/Product';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products : Product[];

  constructor(private productService : ProductsService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data : Product[])=>{
      console.log('product get data', data);
      this.products = data;
    });
  }

  deleteProduct(id){
    console.log('delete ID', id);
    this.productService.dP(id).subscribe(res =>{
      this.products.splice(id, 1);  
      console.log('record deleted', res);
    })
  }

}
