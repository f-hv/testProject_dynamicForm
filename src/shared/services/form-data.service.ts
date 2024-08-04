import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  constructor(private http : HttpClient) {}

  getFormData(): Observable<any> {
    return this.http.get(`https://accounts.mail.ir/app/sign-up`)
  }
}
