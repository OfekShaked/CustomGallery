import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/services/error-handling-service/error-handler.service';
import { NightModeService } from 'src/app/core/services/night-mode-service/night-mode.service';
import { ImageHandlerService } from '../../services/image-handler-service/image-handler.service';
const basicImageFrame = "url('../../../../assets/emptyframe.png')";
@Component({
  selector: 'app-online-image-add',
  templateUrl: './online-image-add.component.html',
  styleUrls: ['./online-image-add.component.css']
})
export class OnlineImageAddComponent implements OnInit {
  img1: string = basicImageFrame;
  img2: string = basicImageFrame;
  img3: string = basicImageFrame;
  imgUrl: string;
  isAbleToUpload: boolean = true;
  errorMessage: string = "";
  constructor(private imageHandlerService: ImageHandlerService, private router: Router, public nightModeService: NightModeService, private errorHandlerService: ErrorHandlerService) { }

  ngOnInit(): void {
  }

  removeImage(imgNum: number) {
    try {
      this.isAbleToUpload = true;
      switch (imgNum) {
        case 1: {
          this.img1 = basicImageFrame;
          break;
        }
        case 2: {
          this.img2 = basicImageFrame;
          break;
        }
        case 3: {
          this.img3 = basicImageFrame;
          break;
        }
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }

  addImage() {
    try {
      if (this.img1 === basicImageFrame) {
        this.toDataURL(this.imgUrl, (base64) => {
          if (base64 !== "error") {
            this.img1 = this.imageHandlerService.setUrl(base64);
          } else this.setInvalidImageUrlMessage();
        });
        return;
      }
      if (this.img2 === basicImageFrame) {
        this.toDataURL(this.imgUrl, (base64) => {
          if (base64 !== "error") {
            this.img2 = this.imageHandlerService.setUrl(base64);
          } else this.setInvalidImageUrlMessage();
        });
        return;
      }
      if (this.img3 === basicImageFrame) {
        this.toDataURL(this.imgUrl, (base64) => {
          if (base64 !== "error") {
            this.img3 = this.imageHandlerService.setUrl(base64);
            this.isAbleToUpload = false;
          } else this.setInvalidImageUrlMessage();
        });
        return;
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }

  setInvalidImageUrlMessage() {
    try {
      this.errorMessage = "Invalid image url";
      setTimeout(() => {
        this.errorMessage = "";
      }, 5000)
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }

  toDataURL(url, callback) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.onload = function () {
        if (this.status == 200 || ((this.response && this.response.type) && (this.response.type == "image/jpeg" || this.response.type === "image/png"))) {
          var reader = new FileReader();
          reader.onloadend = function () {
            callback(reader.result);
          }
          reader.readAsDataURL(xhr.response);
        } else {
          callback("error");
        }
      };
      xhr.open('GET', url, false);
      xhr.responseType = 'blob';
      xhr.send();

    } catch (err) {
      this.setInvalidImageUrlMessage()
      this.errorHandlerService.handleError(err)
    }
  }

  async uploadImages() {
    try {
      if (this.img1 !== basicImageFrame) {
        await this.imageHandlerService.uploadImageToServer(this.imageHandlerService.getBase64StringFromUrl(this.img1))
      }
      if (this.img2 !== basicImageFrame) {
        await this.imageHandlerService.uploadImageToServer(this.imageHandlerService.getBase64StringFromUrl(this.img2))
      }
      if (this.img2 !== basicImageFrame) {
        await this.imageHandlerService.uploadImageToServer(this.imageHandlerService.getBase64StringFromUrl(this.img3))
      }
      this.router.navigateByUrl("/gallery");
    } catch (err) { 
      this.errorHandlerService.handleError(err) 
    }
  }
}



