import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './screens/home/author/author/author.component';
import { BannerComponent } from './screens/home/banner/banner/banner.component';
import { NewsComponent } from './screens/home/news/news/news.component';
import { RecomendationsComponent } from './screens/home/recomendations/recomendations/recomendations.component';
import { LoginComponent } from './screens/login/login/login.component';
import { CartComponent } from './screens/cart/cart/cart.component';
import { HomeComponent } from './screens/home/home.component';
import { BooksComponent } from './screens/books/books.component';
import { AuthorsComponent } from './screens/authors/authors.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'books', component: BooksComponent },
  { path: 'authors', component: AuthorsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
