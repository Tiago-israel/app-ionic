import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseUrl = "https://api.themoviedb.org/3";
  private apiKey = "api_key=7df2fa6696347ec7f081ef69f3fa997d";

  constructor(public http: Http) {
  }

  public buscarFilmes(page : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/popular?${this.apiKey}&page=${page}`).map(response => response.json());
  }

}
