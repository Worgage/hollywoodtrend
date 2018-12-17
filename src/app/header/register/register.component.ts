import { Component } from '@angular/core';
import {LoginService} from '../../login.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private textRequired = Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')]);

  form = this.formBuilder.group({
    name: ['', this.textRequired],
    surname: ['', this.textRequired],
    password: ['', Validators.required],
    country: ['', this.textRequired],
    email: ['', Validators.compose([Validators.required, Validators.email]) ],
  });

  constructor(private login: LoginService,
              private formBuilder: FormBuilder
  ) { }


  onSubmit() {
    this.login.register(this.form.get('name').value, this.form.get('surname').value, this.form.get('email').value,
      this.form.get('country').value, this.form.get('password').value);
  }

}
