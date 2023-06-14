import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './screens/home/author/author/author.component';
import { BannerComponent } from './screens/home/banner/banner/banner.component';
import { NewsComponent } from './screens/home/news/news/news.component';
import { RecomendationsComponent } from './screens/home/recomendations/recomendations/recomendations.component';
import { LoginComponent } from './screens/login/login/login.component';
import { CartComponent } from './screens/cart/cart/cart.component';
import { NavbarComponent } from './shared/components/navbar/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer/footer.component';

const routes: Routes = [
  { path: '', component: AuthorComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'news', component: NewsComponent },
  { path: 'recomendations', component: RecomendationsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
