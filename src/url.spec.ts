import * as urlValidator from './url';
import { FormControl, ValidatorFn } from '@angular/forms';

describe('Url validation', () => {
  let control: FormControl;
  let validator: ValidatorFn;

  function invalid (): void {
    expect(validator(control)).toEqual({
      validateUrl: {
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
      validator = urlValidator.url();
    });

    it('should be invalid if value is not a valid url', () => {
      invalid();
      control.setValue('test');
      invalid();
      control.setValue('info@ex.a');
      invalid();
      control.setValue('htp://example.com');
      invalid();
    });

    it('should be valid only if value is a valid url', () => {
      control.setValue('http://example.com');
      valid();
      control.setValue('info@example.com');
      valid();
    });
  });

  describe('when optional', () => {
    beforeEach(() => {
      validator = urlValidator.url(true);
    });

    it('should be invalid if value is not empty and is not a valid url', () => {
      control.setValue('aze');
      invalid();
      control.setValue('info@ex.a');
      invalid();
      control.setValue('htp://example.com');
      invalid();
    });

    it('should be valid if value is empty or is a valid url', () => {
      valid();
      control.setValue(null);
      valid();
      control.setValue('');
      valid();
      control.setValue('http://example.com');
      valid();
      control.setValue('info@exam.ple');
      valid();
    });
  });

});
