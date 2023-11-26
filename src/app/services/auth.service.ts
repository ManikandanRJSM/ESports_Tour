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
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8000')
    headers.append('Access-Control-Allow-Credentials', 'true')
    headers.append('Content-Type', 'application/json')

    return this.http.post('http://localhost:8000/api/organiser/register', formData, {headers : headers})
  }

  loginOrganiser(formData: any){
    let headers = new HttpHeaders()
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8000')
    headers.append('Access-Control-Allow-Credentials', 'true')
    headers.append('Content-Type', 'application/json')

    return this.http.post('http://localhost:8000/api/organiser/login', formData, {headers : headers})
  }
}
