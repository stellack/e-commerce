import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/interfaces/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products!: Product[];
  productsForm!: FormGroup;

  constructor() { }

  ngOnInit() {
   
  }
  onAddProduct(){
    
  }

}
