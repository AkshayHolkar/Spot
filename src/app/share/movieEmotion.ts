export class MovieEmotion {
  movieId: number;
  happy : number;
  sad: number;
  loved: number;
  fear: number;
  optimistic: number;
  amazed: number;

  constructor(
    movieId: number,
    happy : number,
    sad: number,
    loved: number,
    fear: number,
    optimistic: number,
    amazed: number){

      this.movieId = movieId;
      this.happy = happy;
      this.sad =sad;
      this.loved = loved;
      this.fear = fear;
      this.optimistic = optimistic;
      this.amazed = amazed;
    }
  }