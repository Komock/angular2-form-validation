import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
	
	public formModel: FormGroup;

	constructor(
		private _fb: FormBuilder
	) { }

	ngOnInit() {
		this.formModel = this._fb.group({
			email: ['', [Validators.required, Validators.minLength(6)]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	public onSubmit(values: any): void {
		alert('OK!');
	}

}
