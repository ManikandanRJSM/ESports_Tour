import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateLogin(formData: any){
    if(formData.email === '' || formData.email === undefined || formData.password === '' || formData.password === undefined){
      return false
    }else{
      return true
    }
    console.log(formData.email, formData.password)
  }


  validateRegister(formData: any){
    if(formData.email === '' || formData.email === undefined || formData.password === '' || formData.password === undefined || formData.first_name === '' || formData.first_name === undefined || formData.last_name === '' || formData.last_name === undefined || formData.country === '' || formData.country === undefined){
      return false
    }else{
      return true
    }
    console.log(formData.email, formData.password)
  }
}
