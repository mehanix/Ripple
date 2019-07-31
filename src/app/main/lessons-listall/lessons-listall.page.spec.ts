import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsListallPage } from './lessons-listall.page';

describe('LessonsListallPage', () => {
  let component: LessonsListallPage;
  let fixture: ComponentFixture<LessonsListallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsListallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsListallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
