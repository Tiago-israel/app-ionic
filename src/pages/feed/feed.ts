import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  public filmes: Array<any> = new Array<any>();
  private page: number = 1;
  public lista;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
  ) {}

  ionViewDidLoad() {
    this.doInfinite();
  }

  doInfinite(infiniteScroll?: any) {
    this.movieProvider.buscarFilmes(this.page).subscribe(
      data => {
        this.filmes.concat(data.results);
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
}
