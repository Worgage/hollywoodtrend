import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ArticlePageComponent} from './article-page/article-page.component';

const routes: Routes = [
  { path: '', component: MainComponent  },
  { path: 'article', component: ArticlePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
