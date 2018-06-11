import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public filmes: Array<any> = new Array<any>();
  private page: number = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  ionViewDidLoad() {
    this.doInfinite();
  }

  doInfinite(infiniteScroll?: any) {
    this.movieProvider.buscarFilmes(this.page).subscribe(
      data => {
        data.results.forEach(element => {
          this.filmes.push(element);
        });
      },
      error => {
        console.log(error);
      },
      () => {
        this.page++;
        if (infiniteScroll)
          infiniteScroll.complete();
      }
    )
  }


  // private buscarFilmesPopulares(): void {
  //   this.movieProvider.buscarFilmes(this.page).subscribe(
  //     data => {
  //       this.filmes = data.results;
  //       console.log(data);
  //       console.log(this.filmes);
  //     },
  //     error => {
  //       console.log(error);
  //     },
  //     () => {
  //       this.page++;
  //       console.log("completo");
  //     }
  //   )
  // }

}
