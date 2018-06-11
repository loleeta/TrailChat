import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkwindowComponent } from './linkwindow.component';

describe('LinkwindowComponent', () => {
  let component: LinkwindowComponent;
  let fixture: ComponentFixture<LinkwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
