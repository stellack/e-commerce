import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {
    path: "**",
    pathMatch: 'full',
    component: ProductsListComponent
  },
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  {
    path: 'add-product',
    component: NewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
