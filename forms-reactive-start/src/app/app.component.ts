import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUserNames = ["Chris", "Anna"];
  ngOnInit() {
    this.signupForm = new FormGroup({
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
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });

    // value changes observable/hook
    // this.signupForm.valueChanges.subscribe((value) => console.log(value));

    // status changes observable/hook
    this.signupForm.statusChanges.subscribe((value) => console.log(value));

    this.signupForm.setValue({
      userData: {
        username: "Ram",
        email: "ram@test.com",
      },
      gender: "male",
      hobbies: [],
    });
    this.signupForm.patchValue({
      userData: {
        username: "Hanuman",
      },
    });
  }
  onSubmit() {
    console.log(this.signupForm);
    console.log(
      this.signupForm.get("userData.username").errors?.nameIsForbidden
    );

    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

  //
  getControls() {
    return (<FormArray>this.signupForm.get("hobbies")).controls;
  }
  // another way of gettting controls
  /* get controls() {
    return (this.signupForm.get("hobbies") as FormArray).controls;
  } */

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  // async validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    console.log(control);

    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
