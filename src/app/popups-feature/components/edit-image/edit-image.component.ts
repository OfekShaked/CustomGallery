import { Component, OnInit } from '@angular/core';
import { EditPopService } from '../../../core/services/edit-pop-service/edit-pop.service';


@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {

  constructor(public editPopService: EditPopService) { }

  ngOnInit(): void {
  }

}
