import { FormControl } from '@angular/forms';
import { validatePhone } from './formValid.component';

describe('formValid', () => {
  it('should check if 11 chars returns error', () => {
    const form = new FormControl('phone');
    form.setValue('11111111111');
    const actual = validatePhone(form);
    expect(actual).toEqual({ phoneNumberInvalid: true });
  });

  it('should check if 9 chars returns error', () => {
    const form = new FormControl('phone');
    form.setValue('222222222');
    const actual = validatePhone(form);
    expect(actual).toEqual({ phoneNumberInvalid: true });
  });

  it('should check if 10 chars returns null', () => {
    const form = new FormControl('phone');
    form.setValue('3333333333');
    const actual = validatePhone(form);
    expect(actual).toBeNull();
  });

  it('should check if 10 alpha returns error', () => {
    const form = new FormControl('phone');
    form.setValue('aaabbbcccc');
    const actual = validatePhone(form);
    expect(actual).toEqual({ phoneNumberInvalid: true });
  });

  it('should check if 10 chars are numbers & returns null', () => {
    const form = new FormControl('phone');
    form.setValue('4444444444');
    const actual = validatePhone(form);
    expect(actual).toBeNull();
  });

  it('should check if 10 chars plus dashes returns null', () => {
    const form = new FormControl('phone');
    form.setValue('555-555-5555');
    const actual = validatePhone(form);
    expect(actual).toBeNull();
  });

  it('should check if 10 chars plus () around first 3 chars returns null', () => {
    const form = new FormControl('phone');
    form.setValue('(777)777-7777');
    const actual = validatePhone(form);
    expect(actual).toBeNull();
  });
});

//check if 11 chars returns error
//check if 9 chars returns error
//check 10 chars returns null
//check 10 alpha returns error
//check 10 chars are numbers
//check dashes are valid/null 333-333-3333
//check parathesis are valid/null (333)333-3333
