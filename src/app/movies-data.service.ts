import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';
import {resultType} from './result'

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private http:HttpClient) { }

  fetchMovies()
  {
    let url="https://api.themoviedb.org/3/discover/movie?api_key=b45808cfc639faa44235410b835b0912&language=en-US&with_genres=878";
    return this.http.get<resultType>(url).pipe(
      map(responseData=>{
      
        return responseData;

    }));
  }
}
