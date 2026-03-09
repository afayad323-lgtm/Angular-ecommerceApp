import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Iproducts } from '../models/iproducts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HilightCard } from '../directives/hilight-card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, HilightCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges {
  products: Iproducts[];
  filteredProducts: Iproducts[] = [];
  totalPrice: number = 0;
  @Output() onTotalPriceChanged: EventEmitter<number>;
  @Input() receivedCatId: number = 0;

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
    this.onTotalPriceChanged = new EventEmitter<number>();
  }
  ngOnChanges() {
    this.filterProducts();
  }

  changeQuantity(product: Iproducts, count: HTMLInputElement) {
    const num = Number(count.value);

    if (num <= product.quantity && num > 0) {
      product.quantity -= num;
      this.totalPrice += product.price * num;
      this.onTotalPriceChanged.emit(this.totalPrice);
      count.value = '';
    }
  }
  filterProducts() {
    if (this.receivedCatId === 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (pro) => pro.catId === Number(this.receivedCatId),
      );
    }
  }
}
