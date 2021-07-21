import { Component, OnInit } from '@angular/core';
import { GridViewService } from '../../services/grid-view-service/grid-view.service';
import { SideNavsService } from '../../services/side-nav-service/side-navs.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(public sideNavService:SideNavsService, public gridViewService:GridViewService) { }

  ngOnInit(): void {
  }

}
