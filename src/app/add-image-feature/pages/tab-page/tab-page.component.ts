import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NightModeService } from 'src/app/core/services/night-mode-service/night-mode.service';

import { TabsServiceService } from '../../services/tabs-service/tabs-service.service';


@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.css']
})
export class TabPageComponent implements OnInit {

  constructor( public tabsService:TabsServiceService, public nightModeService:NightModeService) { }

  ngOnInit(): void {
  }

}
