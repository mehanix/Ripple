import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSelectPage } from './topic-select.page';

describe('TopicSelectPage', () => {
  let component: TopicSelectPage;
  let fixture: ComponentFixture<TopicSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicSelectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
