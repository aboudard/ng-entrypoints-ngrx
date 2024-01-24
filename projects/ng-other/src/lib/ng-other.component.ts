import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-ng-other',
    template: `
    <p>
      ng-other works!
    </p>
  `,
    styles: [],
    standalone: true
})
export class NgOtherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ng-other works');
  }

}
