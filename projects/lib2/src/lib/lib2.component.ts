import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib2',
  template: `
  <lib-button>Using lib-button in lib2</lib-button>
  `,
  styles: []
})
export class Lib2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
