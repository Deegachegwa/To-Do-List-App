import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import { FoldersComponent } from './folders/folders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: FoldersComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'folders', component: FoldersComponent },
{ path: 'home', component: HomeComponent },];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    NavbarComponent,
    FoldersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDatepickerModule,
    RouterModule.forRoot(routes),
    
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    MatNativeDateModule,
    FormsModule,
    MatOptionModule,
    ReactiveFormsModule,
   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
