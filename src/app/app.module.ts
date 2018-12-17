import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MovieHeaderComponent } from './main/movie-header/movie-header.component';
import { ArticlesComponent } from './main/articles/articles.component';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule, MatProgressBarModule, MatSliderModule,
  MatSnackBarModule
} from '@angular/material';
import { CategoriesComponent } from './main/categories/categories.component';
import { ReviewsComponent } from './main/reviews/reviews.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './header/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArticlePageComponent } from './article-page/article-page.component';
import { CommentsComponent } from './article-page/comments/comments.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { FeaturedComponent } from './featured/featured.component';
import {CommentsService} from './comments.service';
import { ReviewComponent } from './article-page/review/review.component';
import {DatabaseService} from './database.service';
import {CookieService} from 'ngx-cookie-service';
import { RegisterComponent } from './header/register/register.component';
import {HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MovieHeaderComponent,
    ArticlesComponent,
    CategoriesComponent,
    ReviewsComponent,
    LoginComponent,
    ArticlePageComponent,
    CommentsComponent,
    MoviesListComponent,
    FeaturedComponent,
    ReviewComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatSliderModule,
    MatProgressBarModule,
  ],
  entryComponents: [
    LoginComponent,
    ReviewComponent,
    RegisterComponent
  ],
  providers: [CommentsService, LoginComponent, DatabaseService, CookieService,
    {provide: HashLocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
