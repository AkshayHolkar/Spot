import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {SearchComponent} from './search/search.component';
import {MoviecardListComponent} from './moviecard-list/moviecard-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component:MoviecardListComponent},
  {path: 'movie/:id', component:MovieDetailComponent},
  {path: 'search/:emotion', component:SearchComponent},
  {path: '**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
