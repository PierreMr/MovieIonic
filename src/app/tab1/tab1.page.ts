import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';
import { Movie } from '../models/movie.interface';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  allMovies: Movie[] = [];
  movies: Movie[] = [];
  movieInput: string;

  constructor(
    public moviesService: MoviesService,
    public router: Router,
  ) {
    this.getMovies();
  }
  
  getMovies() {
    this.allMovies = this.moviesService.getMovies();
    this.movies = [...this.allMovies];
  }

  onMovieChange(): void {
    const movieInput = this.movieInput.toLowerCase();
    this.movies = this.allMovies.filter(movie =>
        movie.title.toLowerCase().includes(movieInput)
        || movie.genre.filter(genre => genre.toLowerCase().includes(movieInput)).length > 0
        || movie.actors.filter(actor => actor.toLowerCase().includes(movieInput)).length > 0
        || movie.director.toLowerCase().includes(movieInput)
    );
  }

  onMovieCancel() {
    this.movies = this.allMovies;
  }

  navDetail(movie) {
    console.log(movie);
  }
}
