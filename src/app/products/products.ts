import { Component } from '@angular/core';
import { Iproducts } from '../models/iproducts';
import { Icateogries } from '../models/icateogries';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../pipes/discount-pipe';
import { HilightCard } from '../directives/hilight-card';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, DiscountPipe, HilightCard, HilightCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Iproducts[];
  categeories: Icateogries[];
  selectedCatId: number | null = null;
  totalPrice: number = 0;

  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Dell laptop',
        price: 5000,
        quantity: 3,

        catId: 1,
      },
      {
        id: 200,
        name: 'Lenovo laptop',
        price: 6000,
        quantity: 5,

        catId: 1,
      },
      {
        id: 300,
        name: 'iphone',
        price: 50000,
        quantity: 1,

        catId: 2,
      },
      {
        id: 400,
        name: 'oppo',
        price: 50005,
        quantity: 3,

        catId: 2,
      },
      {
        id: 500,
        name: 'samsung tablet',
        price: 5000,
        quantity: 2,

        catId: 3,
      },
      {
        id: 600,
        name: 'xaomi tablet',
        price: 2000,
        quantity: 0,

        catId: 3,
      },
    ];
    this.categeories = [
      { id: 1, name: 'laptops' },
      { id: 2, name: 'mobile' },
      { id: 3, name: 'tablets' },
    ];
  }
  changeQuantity(product: Iproducts, count: HTMLInputElement) {
    const num = Number(count.value);

    if (num <= product.quantity && num > 0) {
      product.quantity -= num;
      this.totalPrice += product.price * num;
      count.value = '';
    }
  }
}
