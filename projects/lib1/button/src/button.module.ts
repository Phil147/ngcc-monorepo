import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'lib1/checkbox';

@NgModule({
  imports: [CommonModule, CheckboxModule],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
  providers: [],
})
export class ButtonModule { }
