import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cashpayment',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './cashpayment.component.html',
  styleUrl: './cashpayment.component.css'
})
export class CashpaymentComponent {


  
}
