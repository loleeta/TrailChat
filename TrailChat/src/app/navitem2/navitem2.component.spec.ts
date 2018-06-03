import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navitem2Component } from './navitem2.component';

describe('Navitem2Component', () => {
  let component: Navitem2Component;
  let fixture: ComponentFixture<Navitem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navitem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navitem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
