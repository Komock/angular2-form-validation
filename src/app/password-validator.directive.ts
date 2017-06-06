import { Directive } from '@angular/core';
import { FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS } from '@angular/forms';

@Directive({
	selector: '[passwordValidator]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useValue: function(control: FormControl): { [key: string]: boolean } {
				const value: string = control.value || '';
				const valid: boolean = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/i.test(value);
				return (valid ? null : { nospecial: true });
			},
			multi: true
		}
	]
})
export class PasswordValidatorDirective {}
