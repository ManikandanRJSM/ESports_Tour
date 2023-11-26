import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  fetchGames(){

    let headers = new HttpHeaders()
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8000')
    headers.append('Access-Control-Allow-Credentials', 'true')
    headers.append('Content-Type', 'application/json')
    return this.http.get('http://localhost:8000/api/playGames', {headers : headers})
  }
}
