import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductsService) { 
    this.createForm();
  }
  createForm(){
    console.log('Inside Create Form Method', this.angForm, this.fb);
    this.angForm = this.fb.group({
      ProductName:['',Validators.required],
      ProductDescription: ['',Validators.required],
      ProductPrice: ['', Validators.required]
    });
    console.log('End of Create Form Method', this.angForm, this.fb);
  }

  addProduct(ProductName, ProductDescription, ProductPrice){
    const data = this.angForm.value;
    console.log('hey', data);
    this.productService.addProduct(data);
  }
  ngOnInit() {
  }

}
