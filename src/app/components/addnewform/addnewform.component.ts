import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';

@Component({
	selector: 'app-addnewform',
	templateUrl: './addnewform.component.html',
	styleUrls: ['./addnewform.component.css']
})
export class AddnewformComponent implements OnInit {
	detailsForm!: FormGroup;
	durationInSeconds = 5;
	// public phonepattern = "[0-9]{0-10}";
	public emailpattern = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
	detailsArray: any = [];
	constructor(private fb: FormBuilder, public router: Router,private _snackBar: MatSnackBar) { }

	ngOnInit(): void {
		this.detailsForm = this.fb.group({
			fname: new FormControl('', Validators.compose([Validators.required])),
			lname: new FormControl('', Validators.compose([Validators.required])),
			phone: new FormControl('', Validators.compose([Validators.required])),
			email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.emailpattern)])),
			country: new FormControl('', Validators.compose([Validators.required])),
			city: new FormControl('', Validators.compose([Validators.required])),
			state: new FormControl('', Validators.compose([Validators.required])),
			dob: new FormControl('', Validators.compose([Validators.required])),
			password: new FormControl('', Validators.compose([Validators.required])),
			// confirmpassword: new FormControl('',Validators.compose([Validators.required])),
		})

		let presentData: any = [];
		presentData = JSON.parse(localStorage.getItem('details'));
		if (presentData.length > 0) {
			this.detailsArray = presentData;
		}

		this.getIndex();
	}

	getIndex(): void {
		let index;
		index = sessionStorage.getItem('index');
		if (index) {
			let tempArray;
			tempArray = JSON.parse(localStorage.getItem('details'));
			this.detailsForm.controls.fname.setValue(tempArray[index].fname);
			this.detailsForm.controls.lname.setValue(tempArray[index].lname);
			this.detailsForm.controls.phone.setValue(tempArray[index].phone);
			this.detailsForm.controls.email.setValue(tempArray[index].email);
			this.detailsForm.controls.country.setValue(tempArray[index].address.country);
			this.detailsForm.controls.city.setValue(tempArray[index].address.city);
			this.detailsForm.controls.state.setValue(tempArray[index].address.state);
			this.detailsForm.controls.dob.setValue(tempArray[index].dob);
			this.detailsForm.controls.password.setValue(tempArray[index].password);
		}

	}

	submit(): void {
		if (this.detailsForm.valid) {
			let index;
			index = sessionStorage.getItem('index');
			if(index) {
				this.detailsArray[index].fname = this.detailsForm.controls.fname.value,
				this.detailsArray[index].lname = this.detailsForm.controls.lname.value,
				this.detailsArray[index].phone = this.detailsForm.controls.phone.value,
				this.detailsArray[index].email = this.detailsForm.controls.email.value,
				this.detailsArray[index].address.country = this.detailsForm.controls.country.value,
				this.detailsArray[index].address.city = this.detailsForm.controls.city.value,
				this.detailsArray[index].address.state =  this.detailsForm.controls.state.value,
				this.detailsArray[index].dob = this.detailsForm.controls.dob.value,
				this.detailsArray[index].password = this.detailsForm.controls.password.value
				localStorage.setItem('details', JSON.stringify(this.detailsArray));
				this.detailsForm.reset();
				sessionStorage.removeItem('index');
				this._snackBar.openFromComponent(SnackbarComponent, {
					duration: this.durationInSeconds * 1000,
					data: 'Updated Successfully'
				  });
				
			}
			else {
				this.detailsArray.push({
					fname: this.detailsForm.controls.fname.value,
					lname: this.detailsForm.controls.lname.value,
					phone: this.detailsForm.controls.phone.value,
					email: this.detailsForm.controls.email.value,
					address: {
						country: this.detailsForm.controls.country.value,
						city: this.detailsForm.controls.city.value,
						state: this.detailsForm.controls.state.value,
					},
					dob: this.detailsForm.controls.dob.value,
					password: this.detailsForm.controls.password.value,
				});
				console.log(this.detailsArray);
				localStorage.setItem('details', JSON.stringify(this.detailsArray));
				this.detailsForm.reset();
				sessionStorage.removeItem('index');
				this._snackBar.openFromComponent(SnackbarComponent, {
					duration: this.durationInSeconds * 1000,
					data: 'Created Successfully'
				  });
			}
			
		}
		this.router.navigate(['landing'])
	}


}
