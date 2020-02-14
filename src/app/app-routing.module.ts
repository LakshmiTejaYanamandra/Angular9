import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';  
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'products', component: ProductGetComponent },
  { path: 'product/create', component: ProductAddComponent },
  { path: 'edit/:id', component: ProductEditComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule] 
})
export class AppRoutingModule { }
