import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountFormComponent } from './components/account-form/account-form.component';
import {MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
 declarations: [
   AccountFormComponent
 ],
 imports: [
   FormsModule,
   MatIconModule,
   MatInputModule,
   MatMenuModule,
   ReactiveFormsModule,
   CommonModule,
   AccountsRoutingModule
 ]
})
export class AccountsModule { }