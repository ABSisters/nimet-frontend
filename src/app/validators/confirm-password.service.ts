import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConfirmPasswordService {

  static MatchingPassword(control: AbstractControl): void {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirm_password')?.value;
    const currentErrors = control.get('confirm_password')?.errors || {};
    const confirmControl = control.get('confirm_password');

    if (compare(password, confirmPassword)) {
      confirmControl?.setErrors({ ...currentErrors, not_matching: true });
    } else {
      if ('not_matching' in currentErrors) {
        delete currentErrors['not_matching'];
      }
      confirmControl?.setErrors(Object.keys(currentErrors).length ? currentErrors : null);
    }
  }
}

function compare(password: string, confirmPassword: string): boolean {
  return password !== confirmPassword && confirmPassword !== '';
}
