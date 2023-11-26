import { Component } from '@angular/core';
import { ValidateService } from '../validate.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organiser-login',
  templateUrl: './organiser-login.component.html',
  styleUrl: './organiser-login.component.css',
  providers:  [ ValidateService ]
})
export class OrganiserLoginComponent {
  email: String = '';
  password: String = '';
  user_type: String = 'organiser';
  userAuthData: any;

  constructor (private ValidateService: ValidateService, private AuthService: AuthService, private Router: Router) { }


  onLoginSubmit(): any{
    const formData = {
      email : this.email,
      password : this.password,
      user_type : this.user_type,
    }
    if(!this.ValidateService.validateLogin(formData)){
      alert('Please all the feilds.')
      return false;
    }
    // console.log(this.email)

    this.AuthService.loginOrganiser(formData).subscribe(res =>{
      this.AuthService.storeUserAuth(res)
      this.Router.navigate([`${this.user_type}/dashboard`])
    },error => {
      alert('Invalid Credentials.');
    })
  }
}
