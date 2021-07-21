import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TabPageComponent } from './pages/tab-page/tab-page.component';
import { CameraTakePicComponent } from './components/camera-take-pic/camera-take-pic.component';


const routes: Routes = [
  { path: 'addimage', component: TabPageComponent },
  { path: 'takepic', component: CameraTakePicComponent, outlet: 'tabcontent' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddImageRoutingModule { }