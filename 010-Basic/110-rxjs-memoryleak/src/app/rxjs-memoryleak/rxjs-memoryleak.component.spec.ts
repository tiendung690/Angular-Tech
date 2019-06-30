import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMemoryleakComponent } from './rxjs-memoryleak.component';

describe('RxjsMemoryleakComponent', () => {
  let component: RxjsMemoryleakComponent;
  let fixture: ComponentFixture<RxjsMemoryleakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsMemoryleakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMemoryleakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
