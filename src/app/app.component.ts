import { Component } from '@angular/core';

@Component({
  selector: 'ec-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstProductItem = {
    id: 1,
    name: 'Black Harvest Africa T-Shirt',
    imageUrl: 'assets/BlackHarvestAfricaTShirt.png',
    description: 'This is a really cool T-shirt',
    price: 120,
  };
  secondProductItem = {
    id: 2,
    name: 'Black Harvest Africa Hoodie',
    imageUrl: 'assets/BlackHarvestAfricaHoodie.png',
    description: 'This is a really cool hoodie',
    price: 120
  };
}
