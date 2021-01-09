import { TestBed } from '@angular/core/testing';
import { createHttpFactory, HttpMethod, SpectatorHttp  } from '@ngneat/spectator';
import { MoviesDataService } from './movies-data.service';

describe('MoviesDataService', () => {
  let service: MoviesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});


describe('HttpClient testing',()=>{
  let spectator: SpectatorHttp<MoviesDataService>;
  const createHttp = createHttpFactory(MoviesDataService);

  beforeEach(() => spectator = createHttp());

  it('should get result',()=>{
    spectator.service.fetchMovies().subscribe();
    spectator.expectOne('https://api.themoviedb.org/3/discover/movie?api_key=b45808cfc639faa44235410b835b0912&language=en-US&with_genres=878', HttpMethod.GET);
    
  });
  
});
