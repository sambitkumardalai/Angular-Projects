import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['Mail', 'Female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  suggestUserName() {
    const suggestedName = 'Superuser';
    /*     this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: '',
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male',
    }); */

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
  // === access ngform only on submit
  // onSubmit(form:NgForm) {
  //   console.log(form);
  // }
  // === access ngform any time
  onSubmit() {
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.answer;
    this.user.gender = this.signupForm.value.gender;
    console.log(this.user);
    this.signupForm.reset();
  }
}
