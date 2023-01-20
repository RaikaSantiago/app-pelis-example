import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string):string{

    if (poster != null) {
      return `https://image.tmdb.org/t/p/w500${poster}`
    }else{
      return 'assets/no-image.jpg';
    }
    // <img src="https://image.tmdb.org/t/p/w300{{data.poster_path}}" class="img-fluid poster">
  
  }

}
