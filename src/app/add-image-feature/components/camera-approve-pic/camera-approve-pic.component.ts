import { Component, OnInit } from '@angular/core';
import { CameraService } from '../../services/camera-service/camera.service';
import { TabsServiceService } from '../../services/tabs-service/tabs-service.service';

@Component({
  selector: 'app-camera-approve-pic',
  templateUrl: './camera-approve-pic.component.html',
  styleUrls: ['./camera-approve-pic.component.css']
})
export class CameraApprovePicComponent implements OnInit {

  constructor(public cameraService:CameraService, public tabsService:TabsServiceService) { }

  ngOnInit(): void {
  }

}
