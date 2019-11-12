import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1TestComponent } from './module1-test.component';

describe('Module1TestComponent', () => {
  let component: Module1TestComponent;
  let fixture: ComponentFixture<Module1TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
