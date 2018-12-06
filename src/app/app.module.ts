import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MovieHeaderComponent } from './main/movie-header/movie-header.component';
import { ArticlesComponent } from './main/articles/articles.component';
import {AppRoutingModule} from './main/app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material';
import { CategoriesComponent } from './main/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MovieHeaderComponent,
    ArticlesComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,

    //Material
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
