import { AbstractControl, ValidationErrors } from '@angular/forms';
import { remove } from './phone.component';

export function validatePhone(
  control: AbstractControl
): ValidationErrors | null {
  //   const updatedAgain = remove(remove(remove(control.value, '-'), '('), ')');

  const update = remove(control.value, ['-', '(', ')']);

  const fun = parseInt(update);

  if (update.length != 10 || isNaN(fun)) {
    return { phoneNumberInvalid: true };
  }

  return null;
}

function removed() {
  //
}

const move = () => [
  //
];
