import { Injectable } from '@angular/core';
import { LibraryService } from '../library-service/library.service';

@Injectable({
  providedIn: 'root'
})
export class GridViewService {
  gridViewType:string='grid-table';
  postImageClass:string='movie-img'
  postClass:string='movie'
  constructor(private libraryService:LibraryService) { }

  getGridViewType():string{
    return this.gridViewType;
  }

  getPostImageClass():string{
    return this.postImageClass;
  }
  getPostClass():string{
    return this.postClass;
  }
  changeGridViewType(): void {
    if(this.gridViewType==='grid-table'){
      this.setListViewType();
    }
    else{
      this.setGridViewType();
    }
  }

  setGridViewType(){
    this.gridViewType='grid-table';
      this.postClass='movie';
      this.postImageClass='movie-img';
  }

  setListViewType(){
    this.gridViewType='grid-list';
    this.postClass='movie-list';
    this.postImageClass='movie-img-list';
  }
  async setDefaultView(){
    if(this.libraryService.currentLibraryData){
      if(this.libraryService.currentLibraryData.default_template==="Item 1"){
        this.setGridViewType();
      }else{
        this.setListViewType();
      }
    }
  }
}
