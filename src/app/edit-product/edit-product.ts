import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproducts } from '../models/iproducts';
import { Icateogries } from '../models/icateogries';
import { ApiProduct } from '../services/api-product';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct implements OnInit {
  editedProduct!: Iproducts;
  cateogry: Icateogries[];

  constructor(
    private _apiProduct: ApiProduct,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {
    this.cateogry = [
      { id: 1, name: 'laptops' },
      { id: 2, name: 'mobile' },
      { id: 3, name: 'tablets' },
    ];
  }
  ngOnInit(): void {
    const id = Number(this._activatedRoute.snapshot.paramMap.get('id'));

    this._apiProduct.getProductById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.editedProduct = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editProduct() {
    this._apiProduct.editProductById(this.editedProduct.id, this.editedProduct).subscribe({
      next: () => {
        alert('Done');
        this._router.navigateByUrl('/home');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
