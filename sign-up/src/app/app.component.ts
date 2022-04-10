import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordChecker } from './custom-validators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
        acceptTandC: [false, Validators.requiredTrue],
      },
      {
        Validators: PasswordChecker('pasword', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) return;
    console.table(this.registerForm.value);
  }
  onReset() {
    this.registerForm.reset();
    this.submitted = false;
  }
  get formControlGetter() {
    return this.registerForm.controls;
  }
}
