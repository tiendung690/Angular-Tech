import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1Test1Component } from './module1-test1.component';

describe('Module1Test1Component', () => {
  let component: Module1Test1Component;
  let fixture: ComponentFixture<Module1Test1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1Test1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1Test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
