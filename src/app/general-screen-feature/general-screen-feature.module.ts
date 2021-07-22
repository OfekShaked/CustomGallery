import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {GeneralScreenRoutingModule} from './general-screen-routing.module';
import { PermissionPageComponent } from './pages/permission-page/permission-page.component';
import { LibraryCreationPageComponent } from './pages/library-creation-page/library-creation-page.component'


@NgModule({
  declarations: [
    HomePageComponent,
    PermissionPageComponent,
    LibraryCreationPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GeneralScreenRoutingModule
  ]
})
export class GeneralScreenFeatureModule { }
