import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  paises: any[]=[];

  constructor( private http: HttpClient ) { 
    console.log('conexion http');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( (respuesta: any) => {
        console.log(respuesta);
        this.paises = respuesta;
    });
    
  }

  ngOnInit() {
  }

}
