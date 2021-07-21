import { Component, OnInit } from '@angular/core';
import { CameraService } from '../../services/camera-service/camera.service';

@Component({
  selector: 'app-camera-take-pic',
  templateUrl: './camera-take-pic.component.html',
  styleUrls: ['./camera-take-pic.component.css']
})
export class CameraTakePicComponent implements OnInit {

  constructor(public cameraService:CameraService) { }

  ngOnInit(): void {
  }

}
