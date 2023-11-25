import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  registerOrganiser(formData: any){
    let headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')

    return this.http.post('http://localhost:8000/api/organiser/register', formData, {headers : headers})
  }
}
