import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUserNames = ['Chris', 'Anna'];
  signUpForm: FormGroup;
  ngOnInit(): void {
    this.signUpForm = new FormGroup({fghjop
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    // this.signUpForm.valueChanges.subscribe((value) => console.log(value));
    // this.signUpForm.statusChanges.subscribe((status) => console.log(status));

    this.signUpForm.setValue({
      userData: {
        username: 'Sambit',
        email: 'Sambit@gmail.com',
      },
      gender: 'male',
      hobbies: [],
    });
    this.signUpForm.patchValue({
      userData: {
        username: 'Lucky',
      },
    });
  }
  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset(); //=== all reset
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
  get hobbieControls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1)
      return { nameIsForbidden: true };
    return null;
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForBidden: true });
        } else {
          null;
        }
      }, 200);
    });

    return promise;
  }
}
