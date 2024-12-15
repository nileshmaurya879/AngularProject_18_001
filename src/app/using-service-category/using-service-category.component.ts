import { Component } from '@angular/core';
import { CategoryServiceService } from '../category-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CallApiDetailComponent } from "../GETAPI/call-api-detail/call-api-detail.component";
import { AlertComponent } from "../ResuableComponent/alert/alert.component";

@Component({
  selector: 'app-using-service-category',
  standalone: true,
  imports: [CommonModule, FormsModule, CallApiDetailComponent, AlertComponent],
  templateUrl: './using-service-category.component.html',
  styleUrl: './using-service-category.component.scss'
})
export class UsingServiceCategoryComponent {

  CategoryTest:any=[]
  studObj:any = {
    "CategoryName":"",
    "CategoryId":0
  }

  constructor(private CatSer : CategoryServiceService){
    this.GetCategoryDataList();
  }

  GetCategoryDataList() {
    this.CatSer.getCategoryList().subscribe(
      (res: any) => {
        this.CategoryTest = res;
        console.log(res); // Log the response
      }
    );
  }
  FetchCategory(item:any){
    console.log("***********",item)
    this.studObj.CategoryName = item.categoryName
    this.studObj.CategoryId =  item.categoryId
    console.log('fetch Category',this.studObj)
    }

    
 
  DeleteCategory(CatId:any){
    console.log('Delete',CatId);
    this.CatSer.DeleteCategory(CatId).subscribe((res:any)=>{
      this.GetCategoryDataList()
    })
  }

  postCategoryData(){
    console.log(this.studObj);
    this.CatSer.AddCategoryList(this.studObj).subscribe((res:any)=>{
      console.log("success")
      this.GetCategoryDataList();
    })
  }

  UpdateCategoryData(){
    console.log(this.studObj)
    this.CatSer.UpdateCategory(this.studObj).subscribe((res:any)=>{
      this.GetCategoryDataList();
    })
  }

  ResetCategoryData(){
    
  }
}
