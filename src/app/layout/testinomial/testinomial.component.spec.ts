/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestinomialComponent } from './testinomial.component';

describe('TestinomialComponent', () => {
  let component: TestinomialComponent;
  let fixture: ComponentFixture<TestinomialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestinomialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestinomialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
