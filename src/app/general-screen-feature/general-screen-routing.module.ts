import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {PermissionPageComponent} from './pages/permission-page/permission-page.component'
import {LibraryCreationPageComponent} from './pages/library-creation-page/library-creation-page.component'
import { AddCategoriesPageComponent } from './pages/add-categories-page/add-categories-page/add-categories-page.component';
import { AboutUsComponent } from './pages/about-us/about-us/about-us.component';
import { CanEnterLibraryGuard } from '../core/guards/can-enter-library-guard/can-enter-library.guard';

const routes: Routes = [
  {path : '', component : HomePageComponent},
  {path : 'permission', component : PermissionPageComponent},
  {path : 'library', component : LibraryCreationPageComponent},
  {path : 'categories', component : AddCategoriesPageComponent , canActivate:[CanEnterLibraryGuard]},
  {path: 'aboutus',component:AboutUsComponent},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralScreenRoutingModule { }