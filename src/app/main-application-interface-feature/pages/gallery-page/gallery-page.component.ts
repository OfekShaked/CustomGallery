import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import ImageModel from 'src/app/core/models/image-model';
import { GridViewService } from 'src/app/core/services/grid-view-service/grid-view.service';
import { ImagesService } from 'src/app/core/services/images-service/images.service';
import { NightModeService } from 'src/app/core/services/night-mode-service/night-mode.service';
import { PrivateModeService } from 'src/app/core/services/private-mode-service/private-mode.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
  constructor(public nightModeService:NightModeService,public gridViewService: GridViewService, private http: HttpClient, private imagesService: ImagesService, private privateModeService: PrivateModeService, private changeDetection: ChangeDetectorRef) { }
  imagesToShow: ImageModel[];
  imagesInScreen:ImageModel[];
  startImageIndex:number=0;
  endImageIndex:number=20;
  titleKeyword = "title";
  categoryKeyword = "category"
  categories: Array<any> = [];
  ngOnInit(): void {
    this.privateModeService.togglePrivateImagesCallback = (this.togglePrivateImages.bind(this));
    this.imagesService.refreshImagesCallback = (this.refreshImages.bind(this));
    this.waitLoadImages();
    this.gridViewService.setDefaultView();
  }

  async waitLoadImages() {
    await this.imagesService.getImages();
    this.togglePrivateImages();
  }

  async togglePrivateImages() {
    if (this.privateModeService.isCurrentlyInPrivateMode) {
      this.imagesToShow = this.imagesService.images.filter(image => image.isPrivate === true)
    } else {
      this.imagesToShow = this.imagesService.images.filter(image => image.isPrivate !== true);
    }
    this.refreshInfiniteScreen();
    this.changeDetection.detectChanges();
  }

  async refreshImages() {
    this.togglePrivateImages();
  }
  async refreshInfiniteScreen(){
    this.startImageIndex=0;
    this.endImageIndex=20;
    this.imagesInScreen=this.imagesToShow.slice(this.startImageIndex,this.endImageIndex);
  }

  async toggleSearchByTitle(title: string) {
    if (title && title.length > 0) {
      this.togglePrivateImages();
      this.imagesToShow = this.imagesToShow.filter(image => image.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
      this.refreshInfiniteScreen();
      this.changeDetection.detectChanges();
    } else {
      this.togglePrivateImages();
    }
  }

  async toggleSearchByCategory(category: string) {
    if (category && category.length > 0) {
      this.togglePrivateImages();
      await this.filterImageByCategory(category);
      this.refreshInfiniteScreen();
      this.changeDetection.detectChanges();
    } else {
      this.togglePrivateImages();
    }
  }

  onSelectedTitleSearch(val) {
    this.toggleSearchByTitle(val.title);
  }
  onChangeTitleSearch(val) {
    this.toggleSearchByTitle(val);
  }
  onClearTitleSearch() {
    this.toggleSearchByTitle("");
  }
  onSelectedCategorySearch(val) {
    this.toggleSearchByCategory(val.category);
  }
  onChangeCategorySearch(val) {
    this.toggleSearchByCategory(val);
  }
  onClearCategorySearch() {
    this.toggleSearchByCategory("");
  }
  onCategoryFocused(val) {
    this.setCategoriesAvailable();
  }

  setCategoriesAvailable() {
    let categoriesAvailable = [];
    if (this.imagesToShow && this.imagesToShow.length !== 0) {
      this.imagesToShow.forEach(image => {
        if (image.categories && image.categories.length !== 0) {
          image.categories.forEach(category => {
            if (!categoriesAvailable.includes(category)) {
              categoriesAvailable.push(category);
            }
          });
        }
      })
    };
    this.categories = categoriesAvailable.map((cat)=>{return {category:cat}});
  }

  async filterImageByCategory(category: string) {
    let imagesAvailable = [];
    if (this.imagesToShow && this.imagesToShow.length !== 0) {
      for (let i = 0; i < this.imagesToShow.length; i++) {
        if (this.imagesToShow[i].categories && this.imagesToShow[i].categories.length !== 0) {
          for (let j = 0; j < this.imagesToShow[i].categories.length; j++) {
            if (this.imagesToShow[i].categories[j].toLocaleLowerCase().includes(category.toLocaleLowerCase())) {
              imagesAvailable.push(this.imagesToShow[i]);
            }
          }
        }
      }
    }    
    this.imagesToShow = imagesAvailable;
  }
  onScrollDown(){
    this.endImageIndex+=20;
    this.refreshImages();
  }
  onScrollUp(){
    this.endImageIndex = this.endImageIndex-20<20? 20:this.endImageIndex-20;
    this.refreshImages();
  }


}
