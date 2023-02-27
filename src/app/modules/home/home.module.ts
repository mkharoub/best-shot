import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './components/home/home.component';
import {HomeContainer} from "./containers/home/home.container";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent,
    HomeContainer
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
