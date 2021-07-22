import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.css']
})
export class LocationPickerComponent implements OnInit {

  title = 'My first AGM project';
  lat: number;
  lng: number ;
  map: google.maps.Map;
  mapClickListener;

  constructor() { }

  ngOnInit(): void {
    this.findMe();
  }

  public mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener('click', (e: google.maps.MouseEvent) => {
      console.log(e.latLng.lat(), e.latLng.lng());
      this.lat=e.latLng.lat();
      this.lng=e.latLng.lng();
    });
  }
  public ngOnDestroy(): void {
    if (this.mapClickListener) {
      this.mapClickListener.remove();
    }
  }
  private findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat=position.coords.latitude;
        this.lng=position.coords.longitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
