import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface OrderItem {
  name: string;
  image: string;
}

interface Order {
  id: number;
  date: string;
  items: OrderItem[];
  total: number;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    // Mock orders for demo - in real app, fetch from API
    this.orders = [
      {
        id: 1,
        date: new Date().toISOString(),
        items: [
          { name: 'Laptop', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100' },
          { name: 'Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100' }
        ],
        total: 1099
      },
      {
        id: 2,
        date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        items: [
          { name: 'Smartphone', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100' }
        ],
        total: 699
      }
    ];
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}