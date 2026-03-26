import { Routes } from '@angular/router';
import { Order } from './order/order';
import { AboutUs } from './about-us/about-us';
import { Products } from './products/products';
import { NotFound } from './not-found/not-found';
import { Details } from './details/details';
import { Vision } from './vision/vision';
import { Values } from './values/values';
import { AddProduct } from './add-product/add-product';
import { EditProduct } from './edit-product/edit-product';

export const routes: Routes = [
  { path: 'home', component: Order },
  { path: 'add', component: AddProduct },
  { path: 'edit/:id', component: EditProduct },
  {
    path: 'aboutUs',
    component: AboutUs,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'vision' },
      { path: 'vision', component: Vision },
      { path: 'values', component: Values },
    ],
  },
  { path: 'products', component: Products },
  { path: 'details/:id', component: Details },
  { path: '**', component: NotFound },
];
