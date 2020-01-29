import { CheckboxModule } from './checkbox.module';
import { ButtonModule } from 'lib1/button';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { Component } from '@angular/core';


describe('ButtonComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ButtonModule, CheckboxModule],
      declarations: [ CheckboxComponent, TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  template: '<lib-button>Hi</lib-button><lib-checkbox></lib-checkbox>'
})
class TestComponent {}
