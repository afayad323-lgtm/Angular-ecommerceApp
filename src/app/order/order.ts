import { Component } from '@angular/core';
import { Products } from '../products/products';
import { Icateogries } from '../models/icateogries';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  imports: [Products, CommonModule, FormsModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  categeories: Icateogries[];
  selectedCatId: number = 0;
  receivedTotalPrice: number = 0;

  constructor() {
    this.categeories = [
      { id: 1, name: 'laptops' },
      { id: 2, name: 'mobile' },
      { id: 3, name: 'tablets' },
    ];
  }
  calTotalPrice(top: number) {
    this.receivedTotalPrice = top;
  }
}
