import { Component, OnInit } from '@angular/core';
import { GridViewService } from 'src/app/core/services/grid-view-service/grid-view.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  constructor(public gridViewService:GridViewService) { }

  ngOnInit(): void {
  }

}
