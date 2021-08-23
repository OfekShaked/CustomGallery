import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import ImageModel from 'src/app/core/models/image-model';
import { EditPopService } from 'src/app/core/services/edit-pop-service/edit-pop.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handling-service/error-handler.service';
import { GridViewService } from 'src/app/core/services/grid-view-service/grid-view.service';
import { NightModeService } from 'src/app/core/services/night-mode-service/night-mode.service';
import { PrivateModeService } from 'src/app/core/services/private-mode-service/private-mode.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  @Input() image: ImageModel;
  constructor(public nightModeService: NightModeService, private errorHandlerService: ErrorHandlerService, public editPopService: EditPopService, public gridViewService: GridViewService, private http: HttpClient, public privateModeService: PrivateModeService) { }

  ngOnInit(): void {
  }

  async toggleFavourite() {
    try {
      this.image.isFavourite = !this.image.isFavourite;
      await this.http.post<any>("http://localhost:3000/images/udpate", { isFavourite: this.image.isFavourite, imageId: this.image.imageId }).toPromise();
    } catch (err) {
      this.errorHandlerService.handleError(err);
    }
  }
  async togglePrivate() {
    try {
      this.image.isPrivate = !this.image.isPrivate;
      const response = await this.http.post<any>("http://localhost:3000/images/udpate", { isPrivate: this.image.isPrivate, imageId: this.image.imageId }).toPromise();
      this.privateModeService.togglePrivateImagesCallback();
    } catch (err) {
      this.errorHandlerService.handleError(err);
    }
  }
}
