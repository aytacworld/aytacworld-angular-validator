import * as emailValidator from './email';
import { FormControl, ValidatorFn } from '@angular/forms';

describe('Email validation', () => {
  let control: FormControl;
  let validator: ValidatorFn;

  function invalid (): void {
    expect(validator(control)).toEqual({
      validateEmail: {
        valid: false
      }
    });
  }

  function valid (): void {
    expect(validator(control)).toBeNull();
  }

  beforeEach(() => {
    control = new FormControl();
  });

  describe('when mandatory', () => {
    beforeEach(() => {
      validator = emailValidator.email();
    });

    it('should be invalid if value is not a valid email', () => {
      invalid();
      control.setValue('test');
      invalid();
      control.setValue('info@ex.a');
      invalid();
    });

    it('should be valid only if value is a valid email', () => {
      control.setValue('info@example.com');
      valid();
    });
  });

  describe('when optional', () => {
    beforeEach(() => {
      validator = emailValidator.email(true);
    });

    it('should be invalid if value is not empty and is not a valid email', () => {
      control.setValue('aze');
      invalid();
      control.setValue('info@ex.a');
      invalid();
    });

    it('should be valid if value is empty or is a valid email', () => {
      valid();
      control.setValue(null);
      valid();
      control.setValue('');
      valid();
      control.setValue('info@exam.ple');
      valid();
    });
  });

});
