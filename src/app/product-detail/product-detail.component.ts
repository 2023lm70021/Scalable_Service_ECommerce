import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop with 16GB RAM and 512GB SSD', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400' },
    { id: 2, name: 'Smartphone', price: 699, description: 'Latest smartphone with 128GB storage and triple camera', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400' },
    { id: 3, name: 'Headphones', price: 199, description: 'Noise-cancelling wireless headphones with 30-hour battery', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
    { id: 4, name: 'Tablet', price: 499, description: '10-inch tablet with stylus support and 256GB storage', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400' },
    { id: 5, name: 'Smart Watch', price: 299, description: 'Fitness smart watch with heart rate monitor and GPS', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.product = this.products.find(p => p.id === id) || null;
  }

  addToCart() {
    // Mock add to cart
    alert('Added to cart!');
  }

  buyNow() {
    this.router.navigate(['/payment']);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}