import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products!: Product[];

  constructor(private productsService: ProductService) { }

  ngOnInit(){
      this.productsService.getProducts().subscribe(products => {
        this.products = products;
      });

  }

}
