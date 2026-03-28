import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Iproducts } from '../models/iproducts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HilightCard } from '../directives/hilight-card';
import { StaticProducts } from '../services/static-products';
import { Router, RouterLink } from '@angular/router';
import { ApiProduct } from '../services/api-product';
import { Cart } from '../services/cart';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, HilightCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges, OnInit {
  products: Iproducts[] = [] as Iproducts[];
  filteredProducts: Iproducts[] = [];
  totalPrice: number = 0;
  @Output() onTotalPriceChanged = new EventEmitter<number>();
  @Input() receivedCatId: number = 0;

  constructor(
    // private _staticProducts: StaticProducts,
    private _router: Router,
    private _apiProducts: ApiProduct,
    private _cdr: ChangeDetectorRef,
    private _cart: Cart,
    private _productService: ProductService,
  ) {
    // this.products = _staticProducts.getAllProducts();
  }
  filterProducts() {
    if (this.products.length === 0) return;
    if (this.receivedCatId && this.receivedCatId != 0) {
      this.filteredProducts = this.products.filter((pro) => pro.catId === this.receivedCatId);
    } else {
      this.filteredProducts = this.products;
    }
  }
  ngOnChanges() {
    // this.filteredProducts = this._staticProducts.getProductsByCatId(this.receivedCatId);
    this.filterProducts();
  }
  ngOnInit(): void {
    this._productService.products$.subscribe((res) => {
      this.products = res;
      this.filterProducts()
    });
  }
  getProducts() {
    this._apiProducts.getAllProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.filterProducts();
        this._cdr.detectChanges();
      },
      error: (err) => console.log(err),
    });
  }

  changeQuantity(product: Iproducts, count: HTMLInputElement) {
    const num = Number(count.value);

    if (num <= product.quantity && num > 0) {
      this._cart.addToCart(product, num);

      this._productService.updateQuantity(product.id, num);

      count.value = '';
    }
  }
  navigateToDetails(id: number) {
    this._router.navigateByUrl(`/details/${id}`);
  }

  editProduct(id: number) {
    this._router.navigateByUrl(`/edit/${id}`);
  }
  deleteProduct(id: number) {
    this._productService.deleteProduct(id);
  }
}
