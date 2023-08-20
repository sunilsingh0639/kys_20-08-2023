import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  deleteBookByid: any;

  constructor(private http: HttpClient) { }



  getDataList(){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer '+sessionStorage.getItem('token') || '');
    return this.http.get('http://103.224.246.103:3004/plan/list', {headers})
  }

  deleteBooks(bookid : string){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer '+sessionStorage.getItem('token') || '');
    return this.http.get('http://103.224.246.103:3004/plan/deleteById?id=' + bookid ,{headers})
  }

}


