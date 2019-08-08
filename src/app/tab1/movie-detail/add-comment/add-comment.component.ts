import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';
import { ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieComment } from 'src/app/models/movie-comment.interface';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {
  @Input() movie: Movie;
  commentForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      score: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      comment: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      date: new Date(),
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  onSubmit(commentForm) {
    const comment: MovieComment = commentForm.value;
    this.movie.comments = [...this.movie.comments, comment];
    console.log(this.movie.comments);
    this.presentToast();
    this.dismiss();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Votre avis a bien été enregistré.',
      duration: 2000,
      color: 'secondary',
      buttons: [
        {
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });
    toast.present();
  }

}
