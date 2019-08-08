import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie.interface';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  allMovies: Movie[] = [];
  movies: Movie[] = [];

  constructor(
    private moviesService: MoviesService,
    private navCtrl: NavController,
  ) {
    this.getMovies();
  }
  
  getMovies() {
    this.allMovies = this.moviesService.movies;
    this.movies = [...this.allMovies];
  }

  onMovieChange(input: string): void {
    const movieInput = input.toLowerCase();
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

  navDetail(movie: Movie) {
    this.navCtrl.navigateForward('/movie-detail/' + movie.id);
  }
}
