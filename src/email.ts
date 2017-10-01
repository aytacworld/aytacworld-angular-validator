import { FormControl, ValidatorFn } from '@angular/forms';
import * as validator from 'validator';

export function email (optional?: boolean): ValidatorFn {
  return (c: FormControl) => {
    return (optional && !Boolean(c.value)) || validator.isEmail(`${c.value}`) ? null : {
      validateEmail: {
        valid: false
      }
    };
  };
}
