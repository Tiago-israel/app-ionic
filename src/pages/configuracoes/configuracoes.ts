import { PrefilPage } from './../prefil/prefil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SobrePage } from '../sobre/sobre';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  rootPage = PrefilPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  public openPerfilPage(){
    this.navCtrl.push(PrefilPage);
  }

  public openSobrePage(){
    this.navCtrl.push(SobrePage);
  }

}
