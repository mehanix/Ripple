import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSelectPage } from './lesson-select.page';

describe('LessonSelectPage', () => {
  let component: LessonSelectPage;
  let fixture: ComponentFixture<LessonSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonSelectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
