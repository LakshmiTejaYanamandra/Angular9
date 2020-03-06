import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  angForm: FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router:Router,private pS: ProductsService, private fb:FormBuilder) { 
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],  
      ProductDescription: ['', Validators.required ],  
      ProductPrice: ['', Validators.required ]  
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.pS.editProduct(params['id']).subscribe(res =>{
        this.product = res;
      });
    });
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id){
    console.log('edit', ProductName, ProductPrice);
    this.route.params.subscribe(params =>{
      this.pS.updateProduct(ProductName, ProductDescription, ProductPrice, params.id);
      this.router.navigate(['products']);
    });
  }

}
