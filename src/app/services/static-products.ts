import { Injectable } from '@angular/core';
import { Iproducts } from '../models/iproducts';

@Injectable({
  providedIn: 'root',
})
export class StaticProducts {
  products: Iproducts[];

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
  }
  getAllProducts() {
    return this.products;
  }

  getProductsByCatId(catId: number): Iproducts[] {
    if (catId == 0) {
      return this.products;
    } else {
      return this.products.filter((pro) => pro.catId == catId);
    }
  }

  getProductsById(id: number): Iproducts | null {
    const product = this.products.find((pro) => pro.id == id);
    return product ? product : null;
  }
}
