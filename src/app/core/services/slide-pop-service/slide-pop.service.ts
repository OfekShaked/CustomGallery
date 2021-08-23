import { Injectable } from '@angular/core';
import { SideNavsService } from '../side-nav-service/side-navs.service';

@Injectable({
  providedIn: 'root'
})
export class SlidePopService {
  popUpOpenVisibilty: string = ''

  constructor(private sideNavService: SideNavsService) { }
  getPopUpClass() {
    return this.popUpOpenVisibilty;
  }
  triggerSlideShow() {
    if (this.popUpOpenVisibilty === "is-open") {
      this.popUpOpenVisibilty = "";
    } else {
      this.popUpOpenVisibilty = "is-open";
      this.sideNavService.toggleUserMenu();
    }
  }
}
