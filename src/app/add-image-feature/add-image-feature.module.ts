import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabPageComponent } from './pages/tab-page/tab-page.component';
import { AddImageRoutingModule } from './add-image-routing.module';
import { CameraTakePicComponent } from './components/camera-take-pic/camera-take-pic.component';
import { CameraApprovePicComponent } from './components/camera-approve-pic/camera-approve-pic.component';
import { LocalImageAddComponent } from './components/local-image-add/local-image-add.component';
import { OnlineImageAddComponent } from './components/online-image-add/online-image-add.component';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [
    TabPageComponent,
    CameraTakePicComponent,
    CameraApprovePicComponent,
    LocalImageAddComponent,
    OnlineImageAddComponent
  ],
  imports: [
    CommonModule,
    AddImageRoutingModule,
    WebcamModule
  ]
})
export class AddImageFeatureModule { }
