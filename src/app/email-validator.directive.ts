import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

export function emailValidator (control: FormControl): { [key: string]: boolean } {
	const value: string = control.value || '';
	const valid: boolean = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
	return (valid ? null : { nospecial: true });
}

@Directive({
  selector: '[emailValidator]',
  providers: [
		{
			provide: NG_VALIDATORS,
			useValue: emailValidator,
			multi: true
		}
	]
})
export class EmailValidatorDirective {}
