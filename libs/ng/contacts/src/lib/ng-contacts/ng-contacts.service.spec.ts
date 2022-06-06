/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NgContactsService } from './ng-contacts.service';

describe('Service: NgContacts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgContactsService]
    });
  });

  it('should ...', inject([NgContactsService], (service: NgContactsService) => {
    expect(service).toBeTruthy();
  }));
});
