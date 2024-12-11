import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.scss'
})

export class PostApiComponent {

  // studObj: FormGroup = new FormGroup({
  //   CategoryName: new FormControl(),
  //   Operation: new FormControl('ADD')
  // })


  studObj:any = {
    "CategoryName" : "",
    "CategoryId":0
  }

  CategoryTest: any = {
    "CategoryName" : "",
    "CategoryId":0
  };
  // test002:MyTest001
  constructor(private http: HttpClient, private cdr:ChangeDetectorRef) {

    this.http.get("https://localhost:44323/api/Category", {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(
      (res: any) => {
        this.CategoryTest = res;
        console.log(this.CategoryTest);
        this.cdr.detectChanges();
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.error('Error 404: Resource not found');
          // Optionally, show a user-friendly message
        } else {
          console.error('An unexpected error occurred:', error);
          // Handle other errors
          this.CategoryTest = {
            "CategoryName" : "",
            "CategoryId":0
          };
          this.cdr.detectChanges();
        }
      }
    );
  }

  postCategoryData() {
    debugger;
    console.log(JSON.stringify(this.studObj.value));
    //  this.test002 = this.studObj;
    this.http.post("https://localhost:44323/api/Category/AddCategory_002", this.studObj, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe((res: any) => {
      this.updateCategoryList();
      this.cdr.detectChanges();
    }, error => {
      console.error('Error posting data:', error);
    });

  }

  updateCategoryList(){
    this.http.get("https://localhost:44323/api/Category", {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe(
        (res: any) => {
          this.CategoryTest = res;
          console.log(this.CategoryTest);
          this.cdr.detectChanges();
        },
        (error: HttpErrorResponse) => {
          if (error.status === 404) {
            console.error('Error 404: Resource not found');
            // Optionally, show a user-friendly message
            this.CategoryTest = {
              "CategoryName" : "",
              "CategoryId":0
            };
            this.cdr.detectChanges();
           
          } else {
            console.error('An unexpected error occurred:', error);
            // Handle other errors
            
          }
        }
      );
  }

  ResetCategoryData() {
    this.studObj= {
      "CategoryName" : "",
      "CategoryId":0
    }
  
  }

  GetCategoryById(){
    this.http.get("https://localhost:44323/api/Category", {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(
      (res: any) => {
        this.CategoryTest = res;
        console.log(this.CategoryTest);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  FetchCategory(CatDetail:any){
    console.log('Update category...........'+CatDetail.categoryName)
    this.studObj.CategoryName = CatDetail.categoryName;
    this.studObj.CategoryId = CatDetail.categoryId;
  }

  UpdateCategoryData(){
    console.log(this.studObj);
    console.log('Update data....')

    this.http.put("https://localhost:44323/api/Category/UpdateCategory_002",this.studObj,{headers: { 'Content-Type': 'application/json' }}).subscribe((res:any)=>{
      this.updateCategoryList();
    })
  }
  
  DeleteCategory(CatId: number){
    console.log('Delete',CatId)
    this.http.delete("https://localhost:44323/api/Category/DeleteCategory_002?catId=" + CatId,{headers: { 'Content-Type': 'application/json' }}).subscribe((res:any)=>{
      this.updateCategoryList();
    })
  }

}
