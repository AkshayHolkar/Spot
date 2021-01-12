import { Injectable } from '@angular/core';
import { MovieEmotion } from '../share/movieEmotion';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {

  private emotions: MovieEmotion[];
  

  constructor(){
    this.emotions = [
      new MovieEmotion(517096, 2, 0, 3, 0, 2, 0),
      new MovieEmotion(614911, 2, 0, 0, 0, 4, 2),
      new MovieEmotion(733317, 0, 0, 0, 4, 0, 2)
    ];
  }


  public getMovieEmotions(): MovieEmotion[]{
    return this.emotions;
  }

  
  public addEmotion(  movieId: number,
    happy : number,
    sad: number,
    loved: number,
    fear: number,
    optimistic: number,
    amazed: number): void{

    let emotion = new MovieEmotion(movieId, happy, sad, fear, loved, optimistic, amazed);
    this.emotions = this.emotions.filter((e)=> e.movieId != movieId);
    this.emotions.push(emotion);
    }


  public removeEmotion(id: number): void {
    this.emotions = this.emotions.filter((emotion)=> emotion.movieId != id);
  }
 
}