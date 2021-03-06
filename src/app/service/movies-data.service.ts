import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';
import {resultType} from '../share/result';
import {movieDetail} from '../share/movie-detail';


@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  private emotionsUrl = 'api/emotions';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http:HttpClient) { }

  fetchMovies()
  {
    let url="https://api.themoviedb.org/3/discover/movie?api_key=b45808cfc639faa44235410b835b0912&language=en-US&with_genres=878";
    return this.http.get<resultType>(url).pipe(
      map(responseData=>{
      
        return responseData;

    }));
  }

  fetchMovieDetail(id:number)
  {
    let url="https://api.themoviedb.org/3/movie/"+id+"?api_key=b45808cfc639faa44235410b835b0912";
    return this.http.get<movieDetail>(url).pipe(
      map(responseData=>{
      
        return responseData;

    }));
  }

  similarMovies(id:number)
  {
    let url="https://api.themoviedb.org/3/movie/"+id+"/similar?api_key=b45808cfc639faa44235410b835b0912";
    return this.http.get<resultType>(url).pipe(
      map(responseData=>{
      
        return responseData;

    }));
  }


   
}
