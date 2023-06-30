import { Component, ElementRef, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-api-google-maps',
  templateUrl: './api-google-maps.component.html',
  styleUrls: ['./api-google-maps.component.css']
})
export class ApiGoogleMapsComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}  

  scrollToComponent() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    const mapa = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 38.7071, lng: -9.13549 },
      zoom: 14
    });
  
    const marcador = new google.maps.Marker({
      position: { lat: 38.709107, lng: -9.133898 },
      map: mapa,
      title: 'Restaurante Sála' 
    });
    const marcador2 = new google.maps.Marker({
      position: { lat: 38.693478, lng: -9.210515 },
      map: mapa,
      title: 'Restaurante Feitoria' 
    });
    const marcador3 = new google.maps.Marker({
      position: { lat: 38.710528, lng: -9.134953 }, 
      map: mapa,
      title: 'Restaurante Prado' 
    });
    const marcador4 = new google.maps.Marker({
      position: { lat: 38.709101, lng: -9.130631 }, 
      map: mapa,
      title: 'Restaurante Attla' 
    });
    const marcador5 = new google.maps.Marker({
      position: { lat: 38.710271, lng: -9.139715 }, 
      map: mapa,
      title: 'Restaurante Organi Chiado' 
    });
  }
}