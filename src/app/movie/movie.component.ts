import { Component, OnInit } from '@angular/core';

import { MovieService } from './movie.service';

@Component({
  selector: 'movie-component',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit { 

    tittle: any;

    movies: string[];

    constructor(private movieService: MovieService) {
      this.tittle = 'Movie Manager';

      this.movies = this.movieService.getMovies();
    }

    ngOnInit() {

    }

}
