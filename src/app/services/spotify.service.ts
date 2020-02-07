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

    const headers = new HttpHeaders({
      'Authorization':''
    })
    this.http.get("", { headers }  )
    .subscribe(data => {

    })
  }



}
