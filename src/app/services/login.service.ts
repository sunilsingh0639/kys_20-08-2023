import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 url = `http://103.224.246.103:3004/login`;
  constructor(private http: HttpClient) { }
  login(body: any) {
    return this.http.post(this.url, body)
  }

  // getbooklist() {
  //   return this.http.get(this.url);
  // }

}

