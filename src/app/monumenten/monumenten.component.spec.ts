import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentenComponent } from './monumenten.component';

describe('MonumentenComponent', () => {
  let component: MonumentenComponent;
  let fixture: ComponentFixture<MonumentenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonumentenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonumentenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
