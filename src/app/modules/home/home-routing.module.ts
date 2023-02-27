import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeContainer} from "./containers/home/home.container";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeContainer,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
