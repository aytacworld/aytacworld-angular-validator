import { FormControl, ValidatorFn } from '@angular/forms';
import * as validator from 'validator';

export function url (optional?: boolean): ValidatorFn {
  return (c: FormControl) => {
    return (optional && !Boolean(c.value)) || validator.isURL(`${c.value}`) ? null : {
      validateUrl: {
        valid: false
      }
    };
  };
}
