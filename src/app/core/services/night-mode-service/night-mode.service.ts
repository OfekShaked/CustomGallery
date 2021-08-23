import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NightModeService {
  isNightModeEnabled:boolean=false;
  constructor() { }

  activateNightMode(){
    this.isNightModeEnabled=true;
  }
  disableNightMode(){
    this.isNightModeEnabled=false;
  }
}
