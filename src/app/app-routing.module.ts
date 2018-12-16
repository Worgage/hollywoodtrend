import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ArticlePageComponent} from './article-page/article-page.component';
import {FeaturedComponent} from './featured/featured.component';
import {MoviesListComponent} from './movies-list/movies-list.component';

const routes: Routes = [
  { path: '', component: MainComponent  },
  { path: 'movie/:id', component: ArticlePageComponent },
  {path: 'movie', pathMatch: 'full', redirectTo: 'movie/0'},
  { path: 'featured/:page', component: FeaturedComponent },
  {path: 'featured', redirectTo: 'featured/0'},
  { path: 'movies/:page/:search', component: MoviesListComponent },
  { path: 'movies/:page',  component: MoviesListComponent },
  { path: 'movies', pathMatch: 'full', redirectTo: 'movies/0' },
  { path: '*', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
