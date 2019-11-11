import { Component} from '@angular/core';

@Component({
    selector: 'ec-product-item-list',
    templateUrl: './product-item-list.component.html',
    styleUrls: ['./product-item-list.component.css']
})
export class ProductItemListComponent {
    
harvestAfrica = [{
    id: 1,
    name: 'Black Harvest Africa T-Shirt',
    imageUrl: 'assets/HarvestAfricaMerchandise/BlackHarvestAfricaTShirt.png',
    description: 'This is a really cool T-shirt',
    price: 120,
    isFavourite: false,
    Colour: 'black',
    category: 'tshirt'
},
{
    id: 2,
    name: 'Black Harvest Africa Sweater',
    imageUrl: 'assets/HarvestAfricaMerchandise/BlackHarvestAfricaSweater.png',
    description: 'This is a really cool T-shirt',
    price: 120,
    isFavourite: false,
    Colour: 'black',
    category: 'sweater'
},
{
    id: 3,
    name: 'Black Harvest Africa Bag',
    imageUrl: 'assets/HarvestAfricaMerchandise/BlackHarvestAfricaBag.png',
    description: 'This is a really cool T-shirt',
    price: 120,
    isFavourite: false,
    Colour: 'black',
    category: 'accessories'
},
{
    id: 4,
    name: 'Black Harvest Africa Hoodie',
    imageUrl: 'assets/HarvestAfricaMerchandise/BlackHarvestAfricaHoodie.png',
    description: 'This is a really cool T-shirt',
    price: 120,
    isFavourite: false,
    Colour: 'black',
    category: 'hoodie'
},
{
    id: 5,
    name: 'White Harvest Africa T-Shirt',
    imageUrl: 'assets/HarvestAfricaMerchandise/WhiteHarvestAfricaTShirt.png',
    description: 'This is a really cool T-shirt',
    price: 120,
    isFavourite: false,
    Colour: 'white',
    category: 'tshirt'
},
{
    id: 6,
    name: 'Grey Harvest Africa Sweater',
    imageUrl: 'assets/HarvestAfricaMerchandise/GreyHarvestAfricaSweater.png',
    description: 'This is a really cool Sweater',
    price: 120,
    isFavourite: false,
    Colour: 'grey',
    category: 'sweater'
},
{
    id: 7,
    name: 'White Harvest Africa Hoodie',
    imageUrl: 'assets/HarvestAfricaMerchandise/WhiteHarvestAfricaHoodie.png',
    description: 'This is a really cool T-shirt',
    price: 120,
    isFavourite: false,
    Colour: 'white',
    category: 'hoodie'
},
{
    id: 8,
    name: 'White Harvest Africa Bag',
    imageUrl: 'assets/HarvestAfricaMerchandise/WhiteHarvestAfricaBag.png',
    description: 'This is a really cool T-shirt',
    price: 120,
    isFavourite: false,
    Colour: 'white',
    category: 'accessories'
},
];


productItems = this.harvestAfrica;
}
