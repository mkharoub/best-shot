import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './components/home/home.component';
import {UiModule} from "../ui/ui.module";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
