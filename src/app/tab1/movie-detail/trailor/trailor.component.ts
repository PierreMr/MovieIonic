import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trailor',
  templateUrl: './trailor.component.html',
  styleUrls: ['./trailor.component.scss'],
})
export class TrailorComponent implements OnInit {
  @Input() traileryt;

  constructor(
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.traileryt = this.sanitizer.bypassSecurityTrustResourceUrl(this.traileryt);
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
