import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovieDetailPage } from './movie-detail.page';
import { FormatHmPipe } from 'src/app/pipe/format-hm.pipe';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MovieDetailPage, FormatHmPipe]
})
export class MovieDetailPageModule {}
