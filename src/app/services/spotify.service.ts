import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log("Servicio spotify listo");
  }

  getNewRelease(){
    this.http.get("")
    .subscribe(data => {

    })
  }



}
