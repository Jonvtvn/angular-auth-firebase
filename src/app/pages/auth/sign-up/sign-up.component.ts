import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface SignUpForm {
  name: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-sign-up',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export default class SignUpComponent {
  hide = true
  formBuilder = inject(FormBuilder)

  form: FormGroup<SignUpForm> = this.formBuilder.group({
    name: this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true
    }),
    lastName: this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true
    }),
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true
    }),
    password: this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true
    }),
  })

  signUp(): void {
    if (this.form.invalid) return;
    console.log(this.form.value)
  }
}
