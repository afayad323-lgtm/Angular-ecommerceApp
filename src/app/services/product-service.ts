import { Injectable } from '@angular/core';
import { ApiProduct } from './api-product';
import { BehaviorSubject } from 'rxjs';
import { Iproducts } from '../models/iproducts';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products$ = new BehaviorSubject<Iproducts[]>([]);

  constructor(private _apiProduct: ApiProduct) {
    this.loadProducts();
  }

  loadProducts() {
    this._apiProduct.getAllProducts().subscribe((res) => {
      this.products$.next(res);
    });
  }

  updateQuantity(productId: number, change: number) {
    const items = this.products$.value;
    const product = items.find((p) => p.id === productId);
    if (product) product.quantity -= change;
    this.products$.next([...items]);
  }

  deleteProduct(id: number) {
    const items = this.products$.value.filter((p) => p.id !== id);
    this.products$.next(items);
  }
}
