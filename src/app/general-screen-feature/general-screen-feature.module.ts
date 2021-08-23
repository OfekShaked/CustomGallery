import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {GeneralScreenRoutingModule} from './general-screen-routing.module';
import { PermissionPageComponent } from './pages/permission-page/permission-page.component';
import { LibraryCreationPageComponent } from './pages/library-creation-page/library-creation-page.component';
import { AddCategoriesPageComponent } from './pages/add-categories-page/add-categories-page/add-categories-page.component';
import { AboutUsComponent } from './pages/about-us/about-us/about-us.component'


@NgModule({
  declarations: [
    HomePageComponent,
    PermissionPageComponent,
    LibraryCreationPageComponent,
    AddCategoriesPageComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GeneralScreenRoutingModule,
    NgxDatatableModule
  ]
})
export class GeneralScreenFeatureModule { }
