import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  nuevasCanciones : any[] = [];
  constructor( private spotify: SpotifyService) {
    this.spotify.getNewRelease()
        .subscribe( (data: any) => {
          console.log(data);
          this.nuevasCanciones = data;
        });
  }

 

}
