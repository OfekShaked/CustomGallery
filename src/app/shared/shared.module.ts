import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateEnterComponent } from './components/private-enter/private-enter.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons';
import { EditImageComponent } from './components/edit-image/edit-image.component'


@NgModule({
  declarations: [
    PrivateEnterComponent,
    EditImageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    PrivateEnterComponent,
    EditImageComponent,
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas);
    library.addIconPacks(far);
  }
 }
