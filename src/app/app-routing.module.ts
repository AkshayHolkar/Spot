import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {SearchComponent} from './search/search.component';
import {MoviecardListComponent} from './moviecard-list/moviecard-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MovieResolverService} from './service/movie-resolver.service';

const routes: Routes = [
  {path: '', component:MoviecardListComponent, resolve:{movie:MovieResolverService}},
  {path: 'movie/:id', component:MovieDetailComponent},
  {path: 'search/:emotion', component:SearchComponent, resolve:{movie:MovieResolverService}},
  {path: '**', component:PageNotFoundComponent, data:{message:'Page not found'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
