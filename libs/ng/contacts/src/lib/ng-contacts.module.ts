import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgSharedModule } from '@cbs/ng/shared';

import { NgContactsComponent } from './ng-contacts/ng-contacts.component';
import { NgContactsService } from './ng-contacts/ng-contacts.service';

@NgModule({
  imports: [CommonModule, NgSharedModule, HttpClientModule],
  exports: [NgContactsComponent],
  declarations: [NgContactsComponent],
  providers: [NgContactsService],
})
export class NgContactsModule {}
