import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[];
  constructor() {
    this.movies = [];
  }

  async ngOnInit() {
    const res = await fetch('http://localhost:8000/home/movies');
    const data = await res.json();
    this.movies = data;
  }

}
