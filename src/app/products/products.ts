import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Iproducts } from '../models/iproducts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HilightCard } from '../directives/hilight-card';
import { StaticProducts } from '../services/static-products';

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
  @Output() onTotalPriceChanged = new EventEmitter<number>();
  @Input() receivedCatId: number = 0;

  constructor(private _staticProducts: StaticProducts) {
    this.products = _staticProducts.getAllProducts();
    this.filteredProducts = this.products;
  }
  ngOnChanges() {
    this.filteredProducts = this._staticProducts.getProductsByCatId(this.receivedCatId);
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
}
