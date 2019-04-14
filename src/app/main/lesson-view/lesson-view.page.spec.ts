import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonViewPage } from './lesson-view.page';

describe('LessonViewPage', () => {
  let component: LessonViewPage;
  let fixture: ComponentFixture<LessonViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
