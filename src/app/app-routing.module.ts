import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ArticlePageComponent} from './article-page/article-page.component';
import {FeaturedComponent} from './featured/featured.component';
import {MoviesListComponent} from './movies-list/movies-list.component';

const routes: Routes = [
  { path: '', component: MainComponent  },
  { path: 'movie/:id', component: ArticlePageComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'movies', component: MoviesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
