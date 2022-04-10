import { FormGroup } from '@angular/forms';

export const PasswordChecker = (
  controlName: string,
  compareControlName: string
) => {
  return (FormGroup: FormGroup) => {
    const password = FormGroup.controls[controlName];
    const confirmPassword = FormGroup.controls[compareControlName];

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mustMatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
  };
};
