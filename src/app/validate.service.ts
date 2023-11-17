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
}
