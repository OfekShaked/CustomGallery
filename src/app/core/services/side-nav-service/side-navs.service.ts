import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavsService {
  hamburgerMenuVisibility: boolean = false;
  userMenuVisibility: boolean = false;
  privatePopUpVisible:string='none';
  editPopUpVisible:string='none';
  constructor() { }

  toggleHamburgerMenu(): void {
    this.hamburgerMenuVisibility = !this.hamburgerMenuVisibility;
  }
  toggleUserMenu(): void {
    this.userMenuVisibility = !this.userMenuVisibility;
  }

  getHamburgerMenuVisibilityClass(): string {
    return this.hamburgerMenuVisibility ? "active" : "";
  }

  getUserMenuVisibilityClass(): string {
    return this.userMenuVisibility ? "active" : "";
  }

  getPrivatePopUpVisible():string{
    return this.privatePopUpVisible;
  }

  togglePrivatePopUpVisible(): void{
    if(this.privatePopUpVisible==='block'){
      this.privatePopUpVisible='none';
    }else{
      this.privatePopUpVisible='block';
      this.toggleHamburgerMenu()
    }
  }
  getEditPopUpVisible():string{
    return this.editPopUpVisible;
  }

  toggleEditPopUpVisible(): void{
    if(this.editPopUpVisible==='block'){
      this.editPopUpVisible='none';
    }else{
      this.editPopUpVisible='block';
    }
  }


}
