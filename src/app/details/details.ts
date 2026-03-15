import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../models/iproducts';
import { StaticProducts } from '../services/static-products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  product!: Iproducts | null;
  currentId: number = 0;
  constructor(
    private _staticProducts: StaticProducts,
    private _activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.product = this._staticProducts.getProductsById(this.currentId);
  }
}
