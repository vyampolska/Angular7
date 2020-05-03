import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DZ2Component } from './dz2.component';

describe('DZ2Component', () => {
  let component: DZ2Component;
  let fixture: ComponentFixture<DZ2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DZ2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DZ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
