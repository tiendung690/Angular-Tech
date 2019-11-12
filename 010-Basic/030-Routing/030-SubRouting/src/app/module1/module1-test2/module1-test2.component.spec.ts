import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1Test2Component } from './module1-test2.component';

describe('Module1Test2Component', () => {
  let component: Module1Test2Component;
  let fixture: ComponentFixture<Module1Test2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1Test2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1Test2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
