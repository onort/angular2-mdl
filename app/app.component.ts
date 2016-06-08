import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

declare var componentHandler: any;
@Component({
  moduleId: module.id,
  selector: 'my-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'app.component.html',
  providers: [ROUTER_PROVIDERS],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/list', name: 'List', component: ListComponent},
  {path:'/', name: 'Home', component: HomeComponent, useAsDefault: true}
])
export class AppComponent {
  title: string = 'Angular 2 & MDLite Starter';
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}