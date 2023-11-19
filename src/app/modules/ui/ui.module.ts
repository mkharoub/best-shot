import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from "./components/header/header.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent
  ]
})
export class UiModule {
}
