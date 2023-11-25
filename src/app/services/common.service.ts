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
    return this.http.get<Country[]>('http://localhost:8000/api/getCountries')
  }
}
