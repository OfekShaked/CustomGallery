import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BlogPostComponent} from './components/blog-post/blog-post.component'
import {GalleryPageComponent} from './pages/gallery-page/gallery-page.component'

const routes: Routes = [
  {path : 'blogpost', component : BlogPostComponent},
  {path : 'gallery', component : GalleryPageComponent},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainApplicationInterfaceRoutingModule { }