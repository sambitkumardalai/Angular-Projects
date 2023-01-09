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
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // === access ngform only on submit
  // onSubmit(form:NgForm) {
  //   console.log(form);
  // }
  // === access ngform any time
  onSubmit() {
    console.log(this.signupForm);
  }
}
