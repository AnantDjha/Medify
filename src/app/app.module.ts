import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { TagsCompoComponent } from './tags-compo/tags-compo.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { RatingModule } from 'ng-starrating';
import { CartpageComponent } from './cartpage/cartpage.component';
import { WildpageComponent } from './wildpage/wildpage.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  
    HomeComponent,
        SearchBarComponent,
        TagsCompoComponent,
        FoodPageComponent,
        CartpageComponent,
        WildpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxStarRatingModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
