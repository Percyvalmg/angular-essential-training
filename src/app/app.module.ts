import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item.component';
import { NavigationComponent } from './navigation.component';
import { SliderComponent } from './slider.component';
import { FooterComponent } from './footer.component';
import { ShopListComponent } from './shop-list.component';
import { ProductItemListComponent } from './product-item-list.component';
import { FavouriteDirective } from './favourite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { SectionHeaderComponent } from './section-header.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ProductItemComponent,
    NavigationComponent,
    SliderComponent,
    FooterComponent,
    ShopListComponent,
    ProductItemListComponent,
    FavouriteDirective,
    CategoryListPipe,
    SectionHeaderComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
