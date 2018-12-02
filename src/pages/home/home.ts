import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private message: string;

  constructor(public navCtrl: NavController) {

  }

  public showMessage(): void {
    this.message = 'Hello World';
  }

}
