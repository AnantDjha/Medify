import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { WildpageComponent } from './wildpage/wildpage.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent,
  },
  {
    path:"search/:itemName",component:HomeComponent
  },
  {
    path:"tags/:tag", component:HomeComponent
  },
  {
    path:"foodpage/:id",component:FoodPageComponent
  },
  {
    path:"cartpage" ,component:CartpageComponent
  },
  {
    path:"**", component:WildpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
