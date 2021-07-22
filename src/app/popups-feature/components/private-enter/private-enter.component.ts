import { Component, OnInit } from '@angular/core';
import {SideNavsService} from '../../../core/services/side-nav-service/side-navs.service'

@Component({
  selector: 'app-private-enter',
  templateUrl: './private-enter.component.html',
  styleUrls: ['./private-enter.component.css']
})
export class PrivateEnterComponent implements OnInit {

  constructor(public sideNavService: SideNavsService) { }

  ngOnInit(): void {
  }

}
