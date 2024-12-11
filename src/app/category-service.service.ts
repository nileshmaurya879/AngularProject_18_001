import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }


  getCategoryList(){
    this.http.get("https://localhost:44323/api/Category",{headers:{'Content-Type':'application/json'}})
  }

}
