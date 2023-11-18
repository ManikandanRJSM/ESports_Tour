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

  onRegisterSubmit(): any{
    console.log('register action')
  }
}
