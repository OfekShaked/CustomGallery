import { Component, OnInit } from '@angular/core';
import { NightModeService } from 'src/app/core/services/night-mode-service/night-mode.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public nightModeService:NightModeService) { 
  }

  ngOnInit(): void {
  }

}
