import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MovieHeaderComponent } from './main/movie-header/movie-header.component';
import { ArticlesComponent } from './main/articles/articles.component';
import {AppRoutingModule} from './main/app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatChipsModule, MatDividerModule, MatIconModule, MatInputModule, MatButtonModule} from '@angular/material';
import { CategoriesComponent } from './main/categories/categories.component';
import { ReviewsComponent } from './main/reviews/reviews.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MovieHeaderComponent,
    ArticlesComponent,
    CategoriesComponent,
    ReviewsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,

    //Material
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
