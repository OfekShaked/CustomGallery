import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from './core/components/header/header.component'
import { HamburgerMenuComponent } from './core/components/hamburger-menu/hamburger-menu.component';
import {SideNavsService} from './core/services/side-nav-service/side-navs.service'
import {FooterComponent} from './core/components/footer/footer.component'

const routes: Routes = [
  {path:'header', component: HeaderComponent},
  {path:'hamburger', component:HamburgerMenuComponent},
  {path:'footer', component:FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[SideNavsService]
})
export class AppRoutingModule { }
