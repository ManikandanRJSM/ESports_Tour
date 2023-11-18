import { Component } from '@angular/core';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-organiser-register',
  templateUrl: './organiser-register.component.html',
  styleUrl: './organiser-register.component.css',
  providers:  [ ValidateService ]
})
export class OrganiserRegisterComponent {
  first_name : String = ''
  last_name : String = ''
  email : String = ''
  password : String = ''
  organization : String = ''
  country : String = ''
  constructor (private ValidateService: ValidateService) {}

  onRegisterSubmit(): any{
    const formData = {
      first_name : this.first_name,
      last_name : this.last_name,
      email : this.email,
      password : this.password,
      organization : this.organization,
      country : this.country,
    }

    if(!this.ValidateService.validateRegister(formData)){
      alert('please fill all the feilds')
      return false;
    }
    console.log('register action')
  }
}
