import { NgModule } from '@angular/core';


import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagesModule } from '../pages/pages.module';


@NgModule({
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
  imports: [
  ],
})
export class SharedModule { }