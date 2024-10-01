import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardpayment',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './cardpayment.component.html',
  styleUrl: './cardpayment.component.css'
})
export class CardpaymentComponent {

}
