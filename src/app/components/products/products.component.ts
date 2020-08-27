import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {products} from '../../models/mockproducts';
import {SessionService} from '../../services/session.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.products = products;
    this.sessionService.setProducts(products);
    console.log(this.products);
  }

}
