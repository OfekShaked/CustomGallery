import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridViewService {
  gridViewType:string='grid-table';
  postImageClass:string='movie-img'
  postClass:string='movie'
  constructor() { }

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
      this.gridViewType='grid-list';
      this.postClass='movie-list';
      this.postImageClass='movie-img-list';
    }
    else{
      this.gridViewType='grid-table';
      this.postClass='movie';
      this.postImageClass='movie-img';
    }
  }
}
