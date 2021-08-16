import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam'; 
import {Subject, Observable} from 'rxjs';
import { TabsServiceService } from '../tabs-service/tabs-service.service';
import { HttpClient } from '@angular/common/http';

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
   this.webcamImage = webcamImage;
   this.tabService.toggleApproveTab();
  }
  uploadPic():void{
    this.http.post<any>("http://localhost:3000/images/add", {base64String:this.webcamImage.imageAsBase64}).subscribe(
      (response) => {        
        console.log(response);
        
        if (response.status == 200) {
          this.tabService.toggleLocalTab();
        }
      },
      (error) => {
        console.log(error);
        this.tabService.toggleCameraTab();
      }
    )
  }
   
  public get triggerObservable(): Observable<void> {
   return this.trigger.asObservable();
  }
  constructor(private tabService:TabsServiceService, private http:HttpClient) { }
}
