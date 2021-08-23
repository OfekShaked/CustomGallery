import { Injectable } from '@angular/core';
import { LibraryService } from '../library-service/library.service';

@Injectable({
  providedIn: 'root'
})
export class SideNavsService {
  hamburgerMenuVisibility: boolean = false;
  userMenuVisibility: boolean = false;
  privatePopUpVisible: string = 'none';
  editPopUpVisible: string = 'none';
  isInGallery: boolean = false;
  constructor(private libraryService: LibraryService) { }

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

  getPrivatePopUpVisible(): string {
    return this.privatePopUpVisible;
  }

  togglePrivatePopUpVisible(): void {
    if (this.libraryService.isLibraryCreated) {
      if (this.privatePopUpVisible === 'block') {
        this.privatePopUpVisible = 'none';
      } else {
        this.privatePopUpVisible = 'block';
        this.toggleHamburgerMenu()
      }
    }
  }
  getEditPopUpVisible(): string {
    return this.editPopUpVisible;
  }

  toggleEditPopUpVisible(): void {
    if (this.editPopUpVisible === 'block') {
      this.editPopUpVisible = 'none';
    } else {
      this.editPopUpVisible = 'block';
    }
  }

  toggleIsGallery() {
    this.isInGallery = !this.isInGallery;
  }


}
