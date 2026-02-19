import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  paymentInfo = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Mock payment processing
    alert('Payment successful! Order placed.');
    this.router.navigate(['/orders']);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}