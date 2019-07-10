import { Component, OnInit } from '@angular/core';
import {movie} from '../../models/movies.model';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: movie[];
  constructor(private moviesService : MoviesService) {
    this.movies = [];
  }

  async ngOnInit() {
    this.movies = await this.moviesService.getMovies();
  }

}
