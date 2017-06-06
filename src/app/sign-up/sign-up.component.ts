import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

	public formModel: FormGroup;

	constructor(
		private _fb: FormBuilder
	) { }

	ngOnInit() {
		this.formModel = this._fb.group({
			firstName: ['', [Validators.required, Validators.minLength(4)]],
			lastName: ['', [Validators.required, Validators.minLength(4)]],
			email: ['', [Validators.required, Validators.minLength(6)]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	public onSubmit(values: any): void {
		console.log(values);
	}

}
