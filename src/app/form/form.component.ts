import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { validatePhone } from './formValid.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  nameForm!: FormGroup;
  showMsg = false;
  checkVisible = true;
  showString: string = '';

  ngOnInit() {
    this.nameForm = this.fb.group({
      first: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      middle: ['', [Validators.maxLength(30)]],
      last: ['', [Validators.required, Validators.maxLength(30)]],
      phone: ['', [Validators.required, validatePhone]],
    });
  }

  constructor(private fb: FormBuilder) {}

  addName() {
    this.showString = this.nameForm.status;
    if (this.nameForm.valid) {
      this.showMsg = true;
      this.nameForm.disable();
    }
    console.log(this.nameForm.value);
  }

  checkClick() {
    this.checkVisible = !this.checkVisible;
  }
}
