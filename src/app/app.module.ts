import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralScreenFeatureModule } from './general-screen-feature/general-screen-feature.module';
import {AddImageFeatureModule} from './add-image-feature/add-image-feature.module'
import {MainApplicationInterfaceFeatureModule} from './main-application-interface-feature/main-application-interface-feature.module'
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HamburgerMenuComponent } from './core/components/hamburger-menu/hamburger-menu.component';
import { UserMenuComponent } from './core/components/user-menu/user-menu.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HamburgerMenuComponent,
    UserMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralScreenFeatureModule,
    AddImageFeatureModule,
    MainApplicationInterfaceFeatureModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas);
    library.addIconPacks(far);
  }
}
