import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-nested-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgFor,
  ],
  templateUrl: './nested-dynamic-form.component.html',
  styleUrls: ['./nested-dynamic-form.component.scss'],
})
export class NestedDynamicFormComponent {
  fb = inject(FormBuilder);
  nestedDynamicForm: FormGroup = this.fb.group({
    users: this.fb.array([]),
  });
  get users() {
    return this.nestedDynamicForm.controls['users'] as FormArray;
  }
  addUser(): void {
    this.users.push(
      this.fb.group({
        firstName: [''],
        lastName: [''],
        dob: [''],
      })
    );
  }
  deleteUser(index: number): void {
    this.users.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.nestedDynamicForm.value);
  }
}
