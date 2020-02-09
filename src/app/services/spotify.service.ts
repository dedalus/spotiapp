import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log("Servicio spotify listo");
  }

  getNewRelease(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDTqWPjHIP2jcGdgM-tOdNJM-P2XBCtysh0i-QgE0tvZDLL-M2vurpdIZbk4iDfvPNTv9sSERh6aMG9q7A'
    })
    /* this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers }  )
    .subscribe(data => {
       console.log(data);
    }); */
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers } )
        .pipe( map( data => data['albums'].items ));
  }


  getSearch(termino:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDTqWPjHIP2jcGdgM-tOdNJM-P2XBCtysh0i-QgE0tvZDLL-M2vurpdIZbk4iDfvPNTv9sSERh6aMG9q7A'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&offset=20&limit=15`, { headers } )
        .pipe( map( data => data['artists'].items ));  
  }

}
