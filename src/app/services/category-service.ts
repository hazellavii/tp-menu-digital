import { Injectable } from '@angular/core';
import { Category } from '../interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [
    { id: 1, name: 'Comidas' },
    { id: 2, name: 'Veggie' },
    { id: 3, name: 'Postres' }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category | undefined {
    return this.categories.find(c => c.id === id);
  }
}
