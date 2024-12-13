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

  AddCategoryList(studObj:any){
    console.log(studObj);
    return this.http.post("https://localhost:44323/api/Category/AddCategory_002",studObj,{headers:{'Content-Type':'application/json'}});
  }

  DeleteCategory(catId:any){
    return this.http.delete("https://localhost:44323/api/Category/DeleteCategory_002?catId="+catId,{headers:{'Content-Type':'application/json'}});
  }

  UpdateCategory(studObj:any){
     return this.http.put("https://localhost:44323/api/Category/UpdateCategory_002",studObj,{headers:{'Content-Type':'application/json'}})
  }
}
