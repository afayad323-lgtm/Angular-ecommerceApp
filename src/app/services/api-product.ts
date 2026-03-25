import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../models/iproducts';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiProduct {
  constructor(private _httpClient: HttpClient) {}

  getAllProducts(): Observable<Iproducts[]> {
    return this._httpClient.get<Iproducts[]>(`${environment.baseUrl}/products`);
  }

  getProductById(id: number): Observable<Iproducts> {
    return this._httpClient.get<Iproducts>(`${environment.baseUrl}/products/${id}`);
  }

  getProductsByCatId(catId: number): Observable<Iproducts[]> {
    return this._httpClient.get<Iproducts[]>(`${environment.baseUrl}/products?catId=${catId}`);
  }

  addProduct(product: Iproducts): Observable<Iproducts> {
    return this._httpClient.post<Iproducts>(`${environment.baseUrl}/products`, product);
  }

  editProductById(id: number, product: Iproducts): Observable<Iproducts> {
    return this._httpClient.put<Iproducts>(`${environment.baseUrl}/products/${id}`, product);
  }

  deleteProductById(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${environment.baseUrl}/products/${id}`);
  }

  
}
