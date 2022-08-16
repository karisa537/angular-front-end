import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  post(arg0: string, formData: any) {
    throw new Error('Method not implemented.');
  }
  userData: any;

  constructor(private http:HttpClient) { }

  public submitForm(user: any): Observable<any> {
   // const url = 'http://localhost:8083/ken_20970_customers';
    return this.http.post<any>('http://localhost:8082/ken_20970_customers', user);
  }
}
