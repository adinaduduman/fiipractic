import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountFormComponent } from './components/account-form/account-form.component';

const routes: Routes = [
 {
   path: '',
   component: AccountFormComponent
 }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class AccountsRoutingModule { }