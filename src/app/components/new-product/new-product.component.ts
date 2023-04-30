import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  products!: Product[];
  productsForm!: FormGroup;

  constructor(
    private productsService: ProductService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.productsForm = this.fb.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.required],
      image: ['',Validators.required]
    });
  }
  addProduct(){
    const payload = {...this.productsForm.value}
    this.productsService.addProduct(payload).subscribe(products => {
      this.products
    });
  }
 
}
