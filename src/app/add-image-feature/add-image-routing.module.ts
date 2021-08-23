import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabPageComponent } from './pages/tab-page/tab-page.component';
import { CanEnterLibraryGuard } from '../core/guards/can-enter-library-guard/can-enter-library.guard';

const routes: Routes = [
  { path: 'addimage', component: TabPageComponent,canActivate:[CanEnterLibraryGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AddImageRoutingModule { }