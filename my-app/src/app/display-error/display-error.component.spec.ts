import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayErrorComponent } from './display-error.component';

describe('DisplayErrorComponent', () => {
  let component: DisplayErrorComponent;
  let fixture: ComponentFixture<DisplayErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
