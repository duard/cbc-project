import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

import { Contact } from './contact.intercace';
import { NgContactsService } from './ng-contacts.service';

@Component({
  selector: 'cbs-ng-contacts',
  templateUrl: './ng-contacts.component.html',
  styleUrls: ['./ng-contacts.component.scss'],
})
export class NgContactsComponent implements OnInit {
  records: Contact[] = [];
  records$: Observable<Contact[]> = of([]);

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
  });

  constructor(fb: FormBuilder, private api: NgContactsService) {
    //
  }

  ngOnInit(): void {
    this.getAll();
    // this.formGroup();
  }

  getAll() {
    this.api.getAll().subscribe((data: Contact[]) => {
      console.log(data);
      this.records = data;
    });
    this.records$ = this.api.getAll();
  }

  onSubmitModelBased() {
    console.log('reactive form submitted');
    console.log(this.formGroup);
  }

  fullUpdate() {
    this.formGroup.setValue({ name: 'Partial', email: 'monkey' });
  }

  partialUpdate() {
    this.formGroup.patchValue({ name: 'Partial' });
  }

  reset() {
    this.formGroup.reset();
  }
}
