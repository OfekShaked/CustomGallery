import { Component, OnInit } from '@angular/core';
import { EditPopService } from 'src/app/core/services/edit-pop-service/edit-pop.service';
import { GridViewService } from 'src/app/core/services/grid-view-service/grid-view.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor(public editPopService:EditPopService, public gridViewService:GridViewService) { }

  ngOnInit(): void {
  }

}
