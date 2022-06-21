import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD',
    'Access-Control-Allow-Headers': 'X-Requested-With'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localURL = "https://dry-fjord-29838.herokuapp.com/api/v1/user/login"

  constructor(private http: HttpClient, private router: Router) { }
  login(credentials:any): Observable<any> {
    return this.http.post(this.localURL, {
      fullName: credentials.fullName,
      password: credentials.password
    }, httpOptions);
  }

  logout() {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('auth-user');
  }
}
