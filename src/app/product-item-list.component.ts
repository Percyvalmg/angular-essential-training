import { Component} from '@angular/core';

@Component({
    selector: 'ec-product-item-list',
    templateUrl: './product-item-list.component.html',
    styleUrls: ['./product-item-list.component.css']
})
export class ProductItemListComponent {
    productItems = [{
        id: 1,
        name: 'Black Harvest Africa T-Shirt',
        imageUrl: 'assets/BlackHarvestAfricaTShirt.png',
        description: 'This is a really cool T-shirt',
        price: 120,
        isFavourite: false,
        category: 'men'
    }, {
        id: 2,
        name: 'Black Harvest Africa Hoodie',
        imageUrl: 'assets/BlackHarvestAfricaHoodie.png',
        description: 'This is a really cool hoodie',
        price: 120,
        isFavourite: true,
        category: 'women'
    }];
}
