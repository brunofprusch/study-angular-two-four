import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies() {
    return ['Cidades de Papel', 'Antes que Vá', 'A Cabana', 'A culpa é das Estralas']
  }

}
