import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Product} from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsUrl = 'http://localhost:8000/api/products';
  productUrl = 'http://localhost:8000/api/products/{id}';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(catchError(this.errorHandler));
  }

  getProduct(id: number): Observable<Product> {
    this.productUrl = this.productUrl.split('{id}').join(id.toString());
    return this.http.get<Product>(this.productUrl).pipe(catchError(this.errorHandler));
  }

  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error!');
  }
}
