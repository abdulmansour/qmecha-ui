import { Injectable } from '@angular/core';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  products: Product[];
  product: Product;

  constructor() { }

  setProducts(products: Product[]): void {
    this.products = products;
  }

  getProduct(id: number): Product {
    this.products.forEach(product => {
      if (product.id === id) {
        this.product = product;
      }
    });
    return this.product;
  }
}
