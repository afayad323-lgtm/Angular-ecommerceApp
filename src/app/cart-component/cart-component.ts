import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../models/iproducts';
import { Cart } from '../services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-component',
  imports: [CommonModule],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css',
})
export class CartComponent implements OnInit {
  cartItems: Iproducts[] = [];
  totalPrice: number = 0;

  constructor(private _cartService: Cart) {}

  ngOnInit(): void {
    this._cartService.cartItems.subscribe((res) => {
      this.cartItems = res;
    });
    this.totalPrice = this._cartService.getTotalPrice();
  }

  remove(id: number) {
    this._cartService.removeItem(id);
    this._cartService.cartItems.subscribe((res) => {
      this.cartItems = res;
    });
    this.totalPrice = this._cartService.getTotalPrice();
  }
}
