import { Injectable } from '@angular/core';
import {movie} from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor() { 
   
  }
  async getMovies(){
    const res = await fetch('http://localhost:8000/home/movies');
    return await res.json();
  }
}
