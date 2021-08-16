import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsServiceService {

  currentTab : string = 'online';
  constructor() {
    
   }
  
   isCurrentTab(tab:string):boolean{
     return this.currentTab===tab;
   }
   getActiveClass(tab:string):string{
     if(this.currentTab===tab){
       return 'active';
     }
     return ''
   }
  toggleOnlineTab ():void{
    this.currentTab='online';
  }

  toggleLocalTab():void{
    this.currentTab='local';
  }

  toggleCameraTab():void{
    this.currentTab='camera';
  }
  toggleApproveTab():void{
    this.currentTab='approve';
  }
}
