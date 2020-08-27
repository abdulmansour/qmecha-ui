import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  noImageLink = 'https://i0.wp.com/ultravires.ca/wp/wp-content/uploads/2018/03/Then-and-Now_-no-image-found.jpg?w=275';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  routeToProduct(): void {
    this.router.navigate(['/products', this.product.id]);
  }


}
