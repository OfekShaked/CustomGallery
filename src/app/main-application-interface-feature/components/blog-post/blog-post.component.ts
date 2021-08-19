import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import ImageModel from 'src/app/core/models/image-model';
import { EditPopService } from 'src/app/core/services/edit-pop-service/edit-pop.service';
import { GridViewService } from 'src/app/core/services/grid-view-service/grid-view.service';
import { PrivateModeService } from 'src/app/core/services/private-mode-service/private-mode.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  @Input() image:ImageModel;
  constructor(public editPopService:EditPopService, public gridViewService:GridViewService,private http: HttpClient, public privateModeService:PrivateModeService) { }

  ngOnInit(): void {
  }

  async toggleFavourite(){
    this.image.isFavourite=!this.image.isFavourite;
    const response = await this.http.post<any>("http://localhost:3000/images/udpate",{isFavourite:this.image.isFavourite,imageId:this.image.imageId}).toPromise();    
  }
  async togglePrivate(){
    this.image.isPrivate=!this.image.isPrivate;
    const response = await this.http.post<any>("http://localhost:3000/images/udpate",{isPrivate:this.image.isPrivate,imageId:this.image.imageId}).toPromise();
    this.privateModeService.togglePrivateImagesCallback();
  }
}
