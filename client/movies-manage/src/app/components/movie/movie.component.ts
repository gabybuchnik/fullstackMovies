import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie } from 'src/app/models/movies.model';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: movie;
  hidden: boolean;
  constructor(private route: ActivatedRoute , private moviesService : MoviesService) {
    this.hidden = false;
  }

  ngOnInit() {
    if (this.route.snapshot.params.movietitle) {
      const index = this.moviesService.movies.findIndex(movie => movie.title === this.route.snapshot.params.movietitle);
      this.movie = this.moviesService.movies[index];
      this.hidden = true;
    }
  }

}
