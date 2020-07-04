import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CONTACTS_ROUTE } from './contacts.route';
import { ContactsComponent } from './contacts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([CONTACTS_ROUTE])],
  declarations: [ContactsComponent]
})

export class ContactsModule { }
