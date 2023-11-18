import { Component } from '@angular/core';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-organiser-login',
  templateUrl: './organiser-login.component.html',
  styleUrl: './organiser-login.component.css',
  providers:  [ ValidateService ]
})
export class OrganiserLoginComponent {
  email: String = '';
  password: String = '';
  constructor (private ValidateService: ValidateService) { }


  onLoginSubmit(): any{
    const formData = {
      email : this.email,
      password : this.password
    }
    if(!this.ValidateService.validateLogin(formData)){
      alert('Please all the feilds.')
      return false;
    }
    // console.log(this.email)
  }
}
