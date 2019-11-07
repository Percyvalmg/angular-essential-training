import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ec-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() productItem;
  @Output() addToCart = new EventEmitter();

  onAddToCart() {
    console.log('added to cart');
    this.addToCart.emit(this.productItem);
  }
}
