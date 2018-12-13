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
  MatInputModule,
  MatSnackBarModule
} from '@angular/material';
import { CategoriesComponent } from './main/categories/categories.component';
import { ReviewsComponent } from './main/reviews/reviews.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ArticlePageComponent } from './article-page/article-page.component';
import { FooterComponent } from './footer/footer.component';
import { CommentsComponent } from './article-page/comments/comments.component';

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
    FooterComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,

    // Material
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
