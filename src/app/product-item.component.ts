import { Component, Input } from '@angular/core';

@Component({
  selector: 'ec-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() productItem;

  onDelete() {
    console.log('deleted');
  }
}
