import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {mockProducts} from '../../models/mockproducts';
import {SessionService} from '../../services/session-service/session.service';
import {ProductService} from '../../services/product-service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  errorMessage: string;

  constructor(private sessionService: SessionService, private productService: ProductService) { }

  ngOnInit(): void {
    // this.products = mockProducts;
    this.productService.getProducts().subscribe((products) => {
        products.forEach( product => {
          if (product.images[0] !== undefined) {
            product.mainImage = product.images[0].imageLink;
          }
          else {
            product.mainImage = '';
          }
        });

        this.products = products;
        this.sessionService.setProducts(products);
        console.log(this.products);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
