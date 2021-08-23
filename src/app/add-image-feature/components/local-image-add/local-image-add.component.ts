import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/services/error-handling-service/error-handler.service';
import { NightModeService } from 'src/app/core/services/night-mode-service/night-mode.service';
import { ImageHandlerService } from '../../services/image-handler-service/image-handler.service';
const basicImageFrame = "url('../../../../assets/emptyframe.png')";

@Component({
  selector: 'app-local-image-add',
  templateUrl: './local-image-add.component.html',
  styleUrls: ['./local-image-add.component.css']
})
export class LocalImageAddComponent implements OnInit {

  image1: string = basicImageFrame;
  image2: string = basicImageFrame;
  image3: string = basicImageFrame;
  isAbleToUpload: boolean = true;

  constructor(private imageHandlerService: ImageHandlerService, private router: Router, public nightModeService: NightModeService, private errorHandlerService: ErrorHandlerService) { }

  ngOnInit(): void {
  }

  async processFile(event: any) {
    try {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        if (this.image1 === basicImageFrame) {
          this.image1 = this.imageHandlerService.setUrl(reader.result.toString());
          return;
        }
        if (this.image2 === basicImageFrame) {
          this.image2 = this.imageHandlerService.setUrl(reader.result.toString());
          return;
        }
        if (this.image3 === basicImageFrame) {
          this.image3 = this.imageHandlerService.setUrl(reader.result.toString());
          this.isAbleToUpload = false;
          return;
        }
      };
    } catch (err) {
      this.errorHandlerService.handleError(err);
    }
  }
  removeImage(imageNum: number) {
    try{
    switch (imageNum) {
      case 1: this.image1 = basicImageFrame; break;
      case 2: this.image2 = basicImageFrame; break;
      case 3: this.image3 = basicImageFrame; break;
    }
    this.isAbleToUpload = true;
  }catch (err) {
    this.errorHandlerService.handleError(err)
  }
  }
  async uploadImages() {
    try{
    if (this.image1 !== basicImageFrame) {
      await this.imageHandlerService.uploadImageToServer(this.imageHandlerService.getBase64StringFromUrl(this.image1))
    }
    if (this.image2 !== basicImageFrame) {
      await this.imageHandlerService.uploadImageToServer(this.imageHandlerService.getBase64StringFromUrl(this.image1))
    }
    if (this.image3 !== basicImageFrame) {
      await this.imageHandlerService.uploadImageToServer(this.imageHandlerService.getBase64StringFromUrl(this.image1))
    }
    this.router.navigateByUrl("/gallery");
  }catch (err) {
    this.errorHandlerService.handleError(err)
  }
  }
}

