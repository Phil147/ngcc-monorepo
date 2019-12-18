import { NgModule } from '@angular/core';
import { Lib1Component } from './lib1.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [Lib1Component, ButtonComponent],
  imports: [
  ],
  exports: [Lib1Component, ButtonComponent]
})
export class Lib1Module { }
