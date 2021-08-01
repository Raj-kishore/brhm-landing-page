import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from './components/blog/blog.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
    // { path: '', redirectTo: 'blog', pathMatch: 'full' },
    {path: 'about', component: AboutComponent},
    {path: '', component: BlogComponent},
    {path: 'contact', component: ContactComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
