import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproducts } from '../models/iproducts';
import { ApiProduct } from '../services/api-product';
import { Icateogries } from '../models/icateogries';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  newProduct: Iproducts = {} as Iproducts;
  cateogry: Icateogries[];

  constructor(
    private _apiProduct: ApiProduct,
    private _router: Router,
  ) {
    this.cateogry = [
      { id: 1, name: 'laptops' },
      { id: 2, name: 'mobile' },
      { id: 3, name: 'tablets' },
    ];
  }

  addedProduct() {
    this.newProduct.catId = Number(this.newProduct.catId);
    this._apiProduct.addProduct(this.newProduct).subscribe({
      next: (res) => {
        alert('Done');
        this._router.navigateByUrl('/home');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
