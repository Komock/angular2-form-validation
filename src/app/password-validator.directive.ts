import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

export function passwordValidator (control: FormControl): { [key: string]: boolean } {
	const value: string = control.value || '';
	const valid: boolean = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/i.test(value);
	return (valid ? null : { nospecial: true });
}

@Directive({
	selector: '[passwordValidator]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useValue: passwordValidator,
			multi: true
		}
	]
})
export class PasswordValidatorDirective {}
