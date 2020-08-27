import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  noImageLink = 'https://i0.wp.com/ultravires.ca/wp/wp-content/uploads/2018/03/Then-and-Now_-no-image-found.jpg?w=275';

  constructor(private sessionService: SessionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.product = this.sessionService.getProduct(id);
  }

}
