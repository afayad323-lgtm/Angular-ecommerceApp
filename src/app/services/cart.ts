import { Injectable } from '@angular/core';
import { Iproducts } from '../models/iproducts';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cartItems = new BehaviorSubject<Iproducts[]>([]);

  constructor() {
    const data = localStorage.getItem('cart');
    if (data) {
      this.cartItems.next(JSON.parse(data));
    }
  }

 addToCart(product: Iproducts, quantity: number) {
  const current = this.cartItems.value;
  const existing = current.find(p => p.id === product.id);

  if (existing) {
    existing.quantity += quantity; 
  } else {
    current.push({ ...product, quantity }); 
  }

  this.cartItems.next(current);
}
  getCartItems() {
    return this.cartItems;
  }
  getTotalPrice() {
    return this.cartItems.value.reduce((total, p) => total + p.price * p.quantity, 0);
  }
  removeItem(id: number) {
    const filtered = this.cartItems.value.filter((p) => p.id !== id);
    this.cartItems.next(filtered);
  }
  clearCart() {
    this.cartItems.next([]);
  }
}
