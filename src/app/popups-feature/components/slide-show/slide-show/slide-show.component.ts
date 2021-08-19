import { Component, OnInit } from '@angular/core';
import ImageModel from 'src/app/core/models/image-model';
import { ImagesService } from 'src/app/core/services/images-service/images.service';
import { SlidePopService } from 'src/app/core/services/slide-pop-service/slide-pop.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {

  constructor(public slidePopService:SlidePopService,public imagesService:ImagesService) { }

  ngOnInit(): void {
  }

  getSpanImageStyle(image:ImageModel,index:number){
    return {
      "background-image":`url("data:image/png;base64,${image.base64String}")`,
      "animation": `imageAnimation ${this.imagesService.images.filter(img=>img.isPrivate!==true).length*6}s linear infinite 0s`,
      "animation-delay": index*6+'s'
    }
  }
  getUnPrivateImages(){
    if(this.imagesService.images){
      return this.imagesService.images.filter(img=>img.isPrivate!==true);
    }return []
    }

}
