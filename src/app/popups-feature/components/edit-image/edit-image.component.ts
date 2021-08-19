import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import LocationModel from 'src/app/core/models/location-model';
import { EditPopService } from '../../../core/services/edit-pop-service/edit-pop.service';


@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {
  categories: Array<string> = [];
  constructor(public editPopService: EditPopService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllCategorie();
  }
  async getAllCategorie() {
    const response = await this.http.get<any>("http://localhost:3000/categories").toPromise();
    if (response.status === 200) {
      this.categories = response.categories;
    }
  }
  handleLocationChanged(newLocation: LocationModel) {
    this.editPopService.location = { lng: newLocation.lng, lat: newLocation.lat };
  }
  async saveImageData() {
    const updatedImage = { 
      imageId: this.editPopService.currentImageModel.imageId, 
      title: this.editPopService.newTitle, 
      location: this.editPopService.location, 
      categories: this.editPopService.selectedCategories }
    const response = await this.http.post<any>("http://localhost:3000/images/udpate",updatedImage).toPromise();
    this.editPopService.toggleEditPopUpVisible(null);
  }
}
