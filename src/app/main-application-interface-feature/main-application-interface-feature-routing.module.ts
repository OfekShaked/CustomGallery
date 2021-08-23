import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanEnterLibraryGuard } from '../core/guards/can-enter-library-guard/can-enter-library.guard';
import {GalleryPageComponent} from './pages/gallery-page/gallery-page.component'

const routes: Routes = [
  {path : 'gallery', component : GalleryPageComponent,canActivate:[CanEnterLibraryGuard]},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainApplicationInterfaceRoutingModule { }