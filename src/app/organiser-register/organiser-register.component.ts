import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { Country } from '../models/Country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organiser-register',
  templateUrl: './organiser-register.component.html',
  styleUrl: './organiser-register.component.css',
  providers:  [ ValidateService, AuthService, CommonService ]
})
export class OrganiserRegisterComponent implements OnInit {

  first_name : String = ''
  last_name : String = ''
  email : String = ''
  password : String = ''
  organization : String = ''
  country : String = ''
  countryData: Country[] = []
  isRegistered : boolean = false
  messageString : String = ''

  constructor (private ValidateService: ValidateService, private AuthService: AuthService, private CommonService: CommonService, private Router: Router) {}


  ngOnInit(): void{
    
    this.CommonService.getCountry().subscribe(countries => {
      this.countryData = countries
    })
  }

  
  
  
  onRegisterSubmit(): any{
    const formData = {
      first_name : this.first_name,
      last_name : this.last_name,
      email : this.email,
      password : this.password,
      organization : this.organization,
      country : this.country,
      user_type : 'organiser',
    }

    if(!this.ValidateService.validateRegister(formData)){
      alert('please fill all the feilds')
      return false;
    }
    this.AuthService.registerOrganiser(formData).subscribe(res => {
      console.log(res)
      this.isRegistered = true;
      this.messageString = 'Registered Sucessfuly you can login with your crendtials'
      this.Router.navigate(['organiser/register'])
    },
    error => {
      this.messageString = 'Something went worng please try again'
      this.Router.navigate(['organiser/register'])
    })
    // console.log('register action')
  }
}
