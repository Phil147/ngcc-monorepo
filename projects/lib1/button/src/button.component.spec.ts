import { ButtonModule } from './button.module';
import { CheckboxModule } from 'lib1/checkbox';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { Component } from '@angular/core';

describe('ButtonComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckboxModule, ButtonModule],
      declarations: [ TestComponent ]
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
  template: '<lib-checkbox>Hi</lib-checkbox><lib-button>Hi</lib-button>'
})
class TestComponent {}
