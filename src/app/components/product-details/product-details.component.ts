import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session-service/session.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product-service/product.service';
import {Image} from '../../models/Image';
import {main} from '@angular/compiler-cli/src/main';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product(0, '', '', '', false, '', 0, '', '', [], []);
  noImageLink = 'https://i0.wp.com/ultravires.ca/wp/wp-content/uploads/2018/03/Then-and-Now_-no-image-found.jpg?w=275';

  errorMessage: string;

  constructor(private sessionService: SessionService, private route: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));

    if (this.sessionService.getProduct(id) === undefined) {
      this.productService.getProduct(id).subscribe(product => {
        this.product = product;
        this.product.mainImage = product.images.length === 0 ? this.noImageLink : product.images[0].imageLink;
      },
        (error) => {
          this.errorMessage = error;
        });
    }
    else {
      this.product = this.sessionService.getProduct(id);
    }
  }

  updateMainImage(mainImage: Image): void {
    this.product.mainImage = mainImage.imageLink;
  }

}
