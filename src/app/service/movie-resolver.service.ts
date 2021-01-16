import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {resultType} from '../share/result';
import {MoviesDataService} from './movies-data.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<resultType> {
  
  constructor(private movieService: MoviesDataService) { }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<resultType> 
  | Promise<resultType> | resultType{

    return this.movieService.fetchMovies()
  }
}
