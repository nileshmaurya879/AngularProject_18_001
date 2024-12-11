import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<any>{
    return this.http.get("https://localhost:44323/api/Category",{headers:{'Content-Type':'application/json'}})
  }

}
