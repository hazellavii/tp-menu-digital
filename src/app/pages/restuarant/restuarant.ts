import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restuarant.html',
  styleUrls: ['./restuarant.css']
})
export class Restaurant{
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    const categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.products = this.productService.getProductsByCategory(categoryId);
  }
}
