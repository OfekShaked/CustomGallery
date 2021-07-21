import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {PermissionPageComponent} from './pages/permission-page/permission-page.component'
import {LibraryCreationPageComponent} from './pages/library-creation-page/library-creation-page.component'

const routes: Routes = [
  {path : 'home', component : HomePageComponent},
  {path : 'permission', component : PermissionPageComponent},
  {path : 'library', component : LibraryCreationPageComponent},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralScreenRoutingModule { }