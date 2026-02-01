import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Ravioles', price: 3200, categoryId: 1 },
    { id: 2, name: 'Tarta Veggie', price: 2800, categoryId: 2 },
    { id: 3, name: 'Cheesecake', price: 2500, categoryId: 3 }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}


  