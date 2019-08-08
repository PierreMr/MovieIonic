import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { ModalController, NavController } from '@ionic/angular';
import { MovieComment } from 'src/app/models/movie-comment.interface';
import { ActivatedRoute } from '@angular/router';
import { TrailorComponent } from './trailor/trailor.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movie: Movie;
  segment: string = 'infos';

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.movie = this.moviesService.getMovieById(id);
    // if (!this.movie) this.navCtrl.navigateBack('/');
  }

  navHome() {
    this.navCtrl.navigateRoot('/');
  }

  segmentChanged(event) {
    (event.detail.value === 'infos') ? this.segment = 'infos' : (event.detail.value === 'avis') ? this.segment = 'avis' : this.segment = 'infos';
  }

  getScore(comments: MovieComment[]): number {
    if (comments.length > 0) {
      let scores: number = 0;

      comments.forEach(comment => {
        scores = (scores + Number(comment.score));
      });

      const score = (scores / comments.length);

      return Number(score.toFixed(2));
    }
    else return null;
  }

  rand(nb: number) {
    return Math.floor(Math.random() * nb);
  }

  async modalTrailer(traileryt) {
    const modal = await this.modalCtrl.create({
      component: TrailorComponent,
      componentProps: {
        'traileryt': traileryt,
      }
    });
    return await modal.present();
  }

  async modalAddComment(movie) {
    const modal = await this.modalCtrl.create({
      component: AddCommentComponent,
      componentProps: {
        'movie': movie,
      }
    });
    return await modal.present();
  }

}
