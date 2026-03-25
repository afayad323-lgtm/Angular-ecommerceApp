import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../models/iproducts';
import { StaticProducts } from '../services/static-products';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  product!: Iproducts | null;
  currentId: number = 0;
  idsArray!: number[];
  currentIdIndex!: number;
  constructor(
    private _staticProducts: StaticProducts,
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _router: Router,
  ) {
    this.idsArray = this._staticProducts.mapProductToIds();
  }
  ngOnInit() {
    // this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    // this.product = this._staticProducts.getProductsById(this.currentId);

    this._activatedRoute.paramMap.subscribe((paraMap) => {
      this.currentId = Number(paraMap.get('id'));
      this.product = this._staticProducts.getProductsById(this.currentId);
    });
  }

  goBack() {
    this._location.back();
  }
  previous() {
    this.currentIdIndex = this.idsArray.findIndex((id) => id == this.currentId);
    if (this.currentIdIndex != 0) {
      this._router.navigateByUrl(`/details/${this.idsArray[this.currentIdIndex - 1]}`);
    }
  }
  next() {
    this.currentIdIndex = this.idsArray.findIndex((id) => id == this.currentId);
    if (this.currentIdIndex != this.idsArray.length - 1) {
      this._router.navigateByUrl(`/details/${this.idsArray[this.currentIdIndex + 1]}`);
    }
  }
}
