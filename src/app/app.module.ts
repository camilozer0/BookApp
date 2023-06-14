import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './screens/home/banner/banner/banner.component';
import { NewsComponent } from './screens/home/news/news/news.component';
import { RecomendationsComponent } from './screens/home/recomendations/recomendations/recomendations.component';
import { AuthorComponent } from './screens/home/author/author/author.component';
import { CartComponent } from './screens/cart/cart/cart.component';
import { LoginComponent } from './screens/login/login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NewsComponent,
    RecomendationsComponent,
    AuthorComponent,
    CartComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
