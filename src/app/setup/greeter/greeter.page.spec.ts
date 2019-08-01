import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeterPage } from './greeter.page';

describe('GreeterPage', () => {
  let component: GreeterPage;
  let fixture: ComponentFixture<GreeterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
