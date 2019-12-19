import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  someObject = {
    a: 1,
    b: [1,2,3]
  };

  constructor() { }

  ngOnInit() {
  }

}
