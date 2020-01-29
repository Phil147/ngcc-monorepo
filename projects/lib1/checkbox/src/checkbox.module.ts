import { NgModule } from '@angular/core';

import { CheckboxComponent } from './checkbox.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [CheckboxComponent],
  declarations: [CheckboxComponent],
  providers: [],
})
export class CheckboxModule { }
