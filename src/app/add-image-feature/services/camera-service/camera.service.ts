import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { TabsServiceService } from '../tabs-service/tabs-service.service';
import { HttpClient } from '@angular/common/http';
import { ImageHandlerService } from '../image-handler-service/image-handler.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  constructor(private tabService: TabsServiceService, private http: HttpClient, private imageHandlerService: ImageHandlerService, private router:Router) { }

  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
    this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.tabService.toggleApproveTab();
  }
  async uploadPic(): Promise<void> {
    const result = await this.imageHandlerService.uploadImageToServer(this.webcamImage.imageAsBase64);
    if (result) {
      this.router.navigateByUrl('/gallery');
    }
    else {
      this.tabService.toggleCameraTab();
    }
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
