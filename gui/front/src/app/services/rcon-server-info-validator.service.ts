import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'angular4-material-table';

@Injectable()
export class RconServerInfoValidatorService implements ValidatorService {
	getRowValidator(): FormGroup {
		return new FormGroup({
			name: new FormControl(null, Validators.required),
			value: new FormControl(),
		});
	}
}
