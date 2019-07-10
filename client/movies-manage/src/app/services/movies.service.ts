import { Injectable } from '@angular/core';
import { movie } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: movie[];
  constructor() {
    this.movies = [];
  }
  async getMovies() {
    const res = await fetch('http://localhost:8000/home/movies');
    const data = await res.json();
    this.movies = data;
    return data;
  }
}
