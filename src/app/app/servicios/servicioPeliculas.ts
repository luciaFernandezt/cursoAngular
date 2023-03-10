import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient	 } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pelicula } from '../comun/interface/pelicula';

@Injectable({
  providedIn: 'root'
})
export class servicioPeliculas {

  url: string = environment.url;

  constructor(private _http: HttpClient) { }

  getMovies(): Observable<pelicula[]>{
    return this._http.get<pelicula[]>(this.url);
  }
}
