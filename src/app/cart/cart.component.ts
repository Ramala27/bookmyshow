import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartItems!: any[];

constructor() {
  console.log('CartComponent');
}
ngOnInit(): void {
 const cartStr = localStorage.getItem("CART");
  if(cartStr){
    this.cartItems = JSON.parse(cartStr);
  }else{
    this.cartItems = [];
  }
 
}
removeItem(Index:number) {
  this.cartItems.splice(Index,1);
  localStorage.setItem("CART",JSON.stringify(this.cartItems));
}
clearcart() {
localStorage.removeItem("CART");
this.cartItems = []; //reset to empty
}

}

