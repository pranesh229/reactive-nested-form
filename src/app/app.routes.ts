import { Routes } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { NestedDynamicFormComponent } from './nested-dynamic-form/nested-dynamic-form.component';

export const routes: Routes = [
  {
    path: '',
    component: BasicFormComponent,
  },
  {
    path: 'nested',
    component: NestedFormComponent,
  },
  {
    path: 'dynamic-nested',
    component: NestedDynamicFormComponent,
  },
];
