import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var componentHandler: any;
@Component({
  moduleId: module.id,
  selector: 'list',
  templateUrl: 'list.component.html',
   encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {
  title: string = 'This is List View';
  constructor() { }

  ngOnInit() { 
    console.log('Init initialized!')
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

}