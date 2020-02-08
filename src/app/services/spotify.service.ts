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
      'Authorization':'Bearer BQDSaRQ-TcA4kNaygNs9sdueTDtIdM6hwtduk5J2oW5Zb-IXC9GcfG_YXA_N_iILtVtwpyR2g4UQZ8M0Ym0'
    })
    
    /* this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers }  )
    .subscribe(data => {
       console.log(data);
    }); */

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers } );


  }

}
