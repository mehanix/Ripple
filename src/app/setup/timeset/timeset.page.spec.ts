import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesetPage } from './timeset.page';

describe('TimesetPage', () => {
  let component: TimesetPage;
  let fixture: ComponentFixture<TimesetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
