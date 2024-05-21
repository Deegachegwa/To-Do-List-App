import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FoldersComponent } from './folders/folders.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'folders', component: FoldersComponent },
{ path: 'home', component: HomeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
