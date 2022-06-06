import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContactsComponent } from './ng-contacts.component';

describe('NgContactsComponent', () => {
  let component: NgContactsComponent;
  let fixture: ComponentFixture<NgContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgContactsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
