import { Component, ViewEncapsulation } from '@angular/core';

declare var componentHandler: any;
@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'app/home/home.component.html',
})
export class HomeComponent {
  title: string = 'Angular 2 & MDLite Starter';
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}