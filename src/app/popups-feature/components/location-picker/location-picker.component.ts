import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import LocationModel from 'src/app/core/models/location-model';
import { EditPopService } from 'src/app/core/services/edit-pop-service/edit-pop.service';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.css']
})
export class LocationPickerComponent implements OnInit {

  title = 'My first AGM project';
  @Output() locationChanged:EventEmitter<LocationModel> = new EventEmitter();
  lat:number;
  lng:number;
  map: google.maps.Map;
  mapClickListener;

  constructor(private editPopService: EditPopService) { }

  ngOnInit(): void {
    this.editPopService.customObservable.subscribe(()=>this.reloadMap());
  }

  public reloadMap(){
    if(this.editPopService.location!==null){  
    this.lng=this.editPopService.location.lng;
    this.lat=this.editPopService.location.lat;
    }
    else{
     this.findMe();
    }
  }

  public mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener('click', (e: google.maps.MouseEvent) => {
      this.lat=e.latLng.lat();
      this.lng=e.latLng.lng();
      this.locationChanged.emit({lng:this.lng,lat:this.lat});
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
