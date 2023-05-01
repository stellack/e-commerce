import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/interfaces/product';
import { MatDialog } from '@angular/material/dialog';
import { NewProductComponent } from '../new-product/new-product.component';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products!: Product[];

  constructor(
    private productsService: ProductService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(){
      this.productsService.getProducts().subscribe(products => {
        this.products = products;
      });
  }
  openAddProductModal(): void {
    const dialogRef = this.dialog.open(NewProductComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  

}
