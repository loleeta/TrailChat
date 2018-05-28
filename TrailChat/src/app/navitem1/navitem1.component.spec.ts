import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navitem1Component } from './navitem1.component';

describe('Navitem1Component', () => {
  let component: Navitem1Component;
  let fixture: ComponentFixture<Navitem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navitem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navitem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
