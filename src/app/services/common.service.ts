import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Country } from '../models/Country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }


  getCountry(): Observable<Country[]> {
    let headers = new HttpHeaders()
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8000')
    headers.append('Access-Control-Allow-Credentials', 'true')
    headers.append('Content-Type', 'application/json')
    return this.http.get<Country[]>('http://localhost:8000/api/getCountries', {headers : headers})
  }
}
