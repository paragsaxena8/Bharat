/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalltocontactComponent } from './calltocontact.component';

describe('CalltocontactComponent', () => {
  let component: CalltocontactComponent;
  let fixture: ComponentFixture<CalltocontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalltocontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalltocontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
