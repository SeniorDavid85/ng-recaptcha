import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

import { FormsDemoComponent } from './forms-demo.component';
import { settings } from './forms-demo.data';

const routes: Routes = [
  {
    path: '',
    component: FormsDemoComponent,
    data: { page: settings },
  },
];

@NgModule({
  declarations: [FormsDemoComponent],
  imports: [
    RouterModule.forChild(routes),
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    CommonModule,
  ],
})
export class DemoModule { }
