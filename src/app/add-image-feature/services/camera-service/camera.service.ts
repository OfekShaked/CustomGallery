import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam'; 
import {Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  public webcamImage:WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
   this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
   console.info('Saved webcam image', webcamImage);
   this.webcamImage = webcamImage;
  }
   
  public get triggerObservable(): Observable<void> {
   return this.trigger.asObservable();
  }
  constructor() { }
}
