import { ButtonModule } from 'lib1/button';
import { NgModule } from '@angular/core';
import { Lib2Component } from './lib2.component';
import { DerivedComponent } from './derived/derived.component';



@NgModule({
  declarations: [Lib2Component, DerivedComponent],
  imports: [
    ButtonModule
  ],
  exports: [Lib2Component, DerivedComponent]
})
export class Lib2Module { }
