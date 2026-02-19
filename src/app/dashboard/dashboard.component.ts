import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200' },
    { id: 2, name: 'Smartphone', price: 699, description: 'Latest smartphone', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200' },
    { id: 3, name: 'Headphones', price: 199, description: 'Noise-cancelling headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200' },
    { id: 4, name: 'Tablet', price: 499, description: '10-inch tablet', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200' },
    { id: 5, name: 'Smart Watch', price: 299, description: 'Fitness smart watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200' }
  ];

  filteredProducts: Product[] = [];
  searchTerm = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredProducts = this.products;
  }

  onSearch() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewDetails(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  goToOrders() {
    this.router.navigate(['/orders']);
  }
}