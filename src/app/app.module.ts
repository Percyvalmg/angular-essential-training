import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item.component';
import { NavigationComponent } from './navigation.component';
import { SliderComponent } from './slider.component';
import { FooterComponent  } from './footer.component';
import { ShopListComponent  } from './shop-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ProductItemComponent,
    NavigationComponent,
    SliderComponent,
    FooterComponent,
    ShopListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
