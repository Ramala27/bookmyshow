import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {


  card!: string;
  firstname!: string;
  mailid!: string;
  cardnumber!: number;
  expdate!: Date;
  cvvnum!: number;
  cashpayment!:string;
  cardpayment!:string;

  constructor() {
    console.log('PaymentComponent');
  }


  onSubmit() {
    // console.log('card:', this.card + 'firstname:' this.firstname + 'mailid:' this.mailid + 'cardnumber:', 
    // this.cardnumber, + 'expdate:', this.expdate, + 'cvvnum:', this.cvvnum);
    if (this.cvvnum > 999 || this.cvvnum <100) {
      alert('Invalid CVV Number');

    } else if (this.cardnumber > 9999999999999) {
      alert('Invalid Card Number')

          } else {


      const carddetails = {
        cardtype: this.card,
        cardname: this.firstname,
        mailid: this.mailid,
        cardnumber: this.cardnumber,
        expdate: this.expdate,
        cvvnum: this.cvvnum
      };
      console.log("carddetails");
      localStorage.setItem('carddetails', JSON.stringify(carddetails));
      alert('Check Validate Payments');

    }
  }

}
