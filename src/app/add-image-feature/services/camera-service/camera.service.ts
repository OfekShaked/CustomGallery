import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { TabsServiceService } from '../tabs-service/tabs-service.service';
import { HttpClient } from '@angular/common/http';
import { ImageHandlerService } from '../image-handler-service/image-handler.service';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/services/error-handling-service/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  constructor(private tabService: TabsServiceService, private errorHandlerService: ErrorHandlerService, private http: HttpClient, private imageHandlerService: ImageHandlerService, private router: Router) { }

  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
    try {
      this.trigger.next();
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }
  handleImage(webcamImage: WebcamImage): void {
    try {
      this.webcamImage = webcamImage;
      this.tabService.toggleApproveTab();
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }
  async uploadPic(): Promise<void> {
    try {
      const result = await this.imageHandlerService.uploadImageToServer(this.webcamImage.imageAsBase64);
      if (result) {
        this.router.navigateByUrl('/gallery');
      }
      else {
        this.tabService.toggleCameraTab();
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
