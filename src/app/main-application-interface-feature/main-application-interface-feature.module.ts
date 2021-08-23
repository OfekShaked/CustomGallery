import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import {PopupsFeatureModule } from '../popups-feature/popups-feature.module'
import {MainApplicationInterfaceRoutingModule} from './main-application-interface-feature-routing.module'
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'


@NgModule({
  declarations: [
    GalleryPageComponent,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    PopupsFeatureModule,
    MainApplicationInterfaceRoutingModule,
    InfiniteScrollModule,
    FontAwesomeModule,
    AutocompleteLibModule
  ]
})
export class MainApplicationInterfaceFeatureModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas);
    library.addIconPacks(far);
  }
 }
