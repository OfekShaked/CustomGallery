import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { TabsServiceService } from '../../services/tabs-service/tabs-service.service';


@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.css']
})
export class TabPageComponent implements OnInit {

  constructor(private router:Router, public tabsService:TabsServiceService) { }

  ngOnInit(): void {
  }

}
