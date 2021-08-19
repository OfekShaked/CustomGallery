import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrivateModeService } from 'src/app/core/services/private-mode-service/private-mode.service';

@Component({
  selector: 'app-permission-page',
  templateUrl: './permission-page.component.html',
  styleUrls: ['./permission-page.component.css']
})
export class PermissionPageComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient,private privateModeService:PrivateModeService) { }
  isCameraAllowed:boolean= false;
  isLocationAllowed: boolean=false;
  isPrivateAllowed:boolean=false;
  password:string="";
  ngOnInit(): void {
    this.getCameraAccess();
    this.getLocationAccess();
  }

  privateAccessChanged=(e)=>{
    this.isPrivateAllowed=e.target.checked;
    this.password="";
  }

  clearPasswordBox = (e) =>{
    if(!this.isPrivateAllowed){
    e.target.value="";
    }
    
  }

  canChangeCamera = (e)=>{   
    if(!e.target.checked===this.isCameraAllowed){
      e.preventDefault();
    }
  };

  canChangeLocation = (e)=>{
    if(!e.target.checked===this.isLocationAllowed){
      e.preventDefault();
    }
  }

  getCameraAccess = () => {    
    try{
    let allowedPromise = navigator.mediaDevices.getUserMedia(
      {
        video: true
      }).catch(()=>{
        this.isCameraAllowed=false;
      });
    if(allowedPromise){
      this.isCameraAllowed=true;
    }
    }catch(err){
      this.isCameraAllowed=false;
    }
  }
  getLocationAccess = ()=> {
    try{
      navigator.permissions.query({
        name: 'geolocation'
    }).then((result)=> {
        if (result.state == 'granted') {
            this.isLocationAllowed=true;
            return;
        } else if (result.state == 'prompt') {
          navigator.geolocation.getCurrentPosition((location)=>{this.isLocationAllowed=true; return;
          },(err)=>{
            this.isLocationAllowed=false; return;
          });
          this.isLocationAllowed=false;return;
        } else if (result.state == 'denied') {
          this.isLocationAllowed=false;
          return;
        }
      });
    }catch(err){
      this.isLocationAllowed=false;
    }
  }
  async nextPage(){
    this.privateModeService.setPrivateModePassword(this.password);
    this.router.navigateByUrl('/library');
  }
}
