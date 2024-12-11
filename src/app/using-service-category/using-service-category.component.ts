import { Component } from '@angular/core';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-using-service-category',
  standalone: true,
  imports: [],
  templateUrl: './using-service-category.component.html',
  styleUrl: './using-service-category.component.scss'
})
export class UsingServiceCategoryComponent {

  constructor(private CatSer : CategoryServiceService){

  }

  GetCategoryDataList(){
    this.CatSer.getCategoryList().subscribe((res:any)=>{
      console.log(res);
    }) 
  }
}
