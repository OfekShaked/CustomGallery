import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { Observable } from 'rxjs';
import ImageModel from 'src/app/core/models/image-model';
import { GridViewService } from 'src/app/core/services/grid-view-service/grid-view.service';
import { ImagesService } from 'src/app/core/services/images-service/images.service';
import { PrivateModeService } from 'src/app/core/services/private-mode-service/private-mode.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  constructor(public gridViewService:GridViewService,private http: HttpClient,private imagesService:ImagesService,private privateModeService:PrivateModeService,private changeDetection:ChangeDetectorRef) { }
  imagesToShow:ImageModel[];
 ngOnInit(): void {
    this.privateModeService.togglePrivateImagesCallback=(this.togglePrivateImages.bind(this));
  }

  async togglePrivateImages(){    
    if(this.privateModeService.isCurrentlyInPrivateMode){
    this.imagesToShow = this.imagesService.images.filter(image=>image.isPrivate===true)
    }else{
      this.imagesToShow = this.imagesService.images.filter(image=>image.isPrivate!==true);
    }
    this.changeDetection.detectChanges();
    
  }

}
