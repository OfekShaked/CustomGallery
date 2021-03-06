import { Component, OnInit } from '@angular/core';
import { NightModeService } from '../../services/night-mode-service/night-mode.service';
import {SideNavsService} from '../../services/side-nav-service/side-navs.service'

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {

  constructor(public sideNavService: SideNavsService,public nightModeService:NightModeService) { }

  ngOnInit(): void {
  }

}
