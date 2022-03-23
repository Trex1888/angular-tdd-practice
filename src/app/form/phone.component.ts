import { AbstractControl, ValidationErrors } from '@angular/forms';

export const phone = (control: AbstractControl): ValidationErrors | null => {
  const update = remove(control.value, ['-', '(', ')']);

  const convert = parseInt(update);

  if (update.length != 10 || isNaN(convert)) {
    return { phoneNumberInvalid: true };
  }

  return null;
};

export const remove = (initValue: string, items: string[]) => {
  let updated = initValue;
  for (const item of items) {
    updated = updated.split(item).join('');
  }
  return updated;
};

// export function validatePhone(
//   control: AbstractControl
// ): ValidationErrors | null {
//   //   const updatedAgain = remove(remove(remove(control.value, '-'), '('), ')');

//   const updated2 = remove(control.value, ['-', '(', ')']);

//   const fun = parseInt(updated2);

//   if (updated2.length != 10 || isNaN(fun)) {
//     return { phoneNumberInvalid: true };
//   }

//   return null;
// }
