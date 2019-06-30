import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMemoryleakFixTakeutilComponent } from './rxjs-memoryleak-fix-takeutil.component';

describe('RxjsMemoryleakFixTakeutilComponent', () => {
  let component: RxjsMemoryleakFixTakeutilComponent;
  let fixture: ComponentFixture<RxjsMemoryleakFixTakeutilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsMemoryleakFixTakeutilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMemoryleakFixTakeutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
