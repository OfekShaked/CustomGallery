import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgmCoreModule} from '@agm/core'
import {FormsModule} from '@angular/forms'
import { PrivateEnterComponent } from './components/private-enter/private-enter.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons';
import { EditImageComponent } from './components/edit-image/edit-image.component';
import { LocationPickerComponent } from './components/location-picker/location-picker.component';
import { SlideShowComponent } from './components/slide-show/slide-show/slide-show.component'


@NgModule({
  declarations: [
    PrivateEnterComponent,
    EditImageComponent,
    LocationPickerComponent,
    SlideShowComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  exports: [
    PrivateEnterComponent,
    EditImageComponent,
    SlideShowComponent
  ]
})
export class PopupsFeatureModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas);
    library.addIconPacks(far);
  }
 }
