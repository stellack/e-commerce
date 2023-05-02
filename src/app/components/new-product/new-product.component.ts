import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
    this.productsForm = this.fb.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.required],
      // image: ['',Validators.required]
    });
  }
  // addProduct(){
  //   const payload = {...this.productsForm.value}
  //   this.productsService.addProduct(payload).subscribe(products => {
  //     this.products
  //   });
  // }
  // addProduct(): void {
  //   const product = this.productsForm.value;
  //   this.productsService.addProduct(product).subscribe(() => {
  //     // Handle successful response
  //     console.log('Product added successfully');
  //     this.productsForm.reset();
  //   }, (error) => {
  //     // Handle error response
  //     console.error(error);
  //   });
  // }
  onSubmit() {
    const product = this.productsForm.value;
    this.productsService.addProduct(product).subscribe(result => {
      this.dialogRef.close();
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
 
}
