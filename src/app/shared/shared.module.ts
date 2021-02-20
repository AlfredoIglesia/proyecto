import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { PagesModule } from '../pages/pages.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent, 
  ],
})
export class SharedModule { }