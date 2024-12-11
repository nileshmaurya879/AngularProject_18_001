import { Component } from '@angular/core';
import { CategoryServiceService } from '../category-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-using-service-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './using-service-category.component.html',
  styleUrl: './using-service-category.component.scss'
})
export class UsingServiceCategoryComponent {

  CategoryTest:any={
    
  }

  constructor(private CatSer : CategoryServiceService){
    this.GetCategoryDataList();
  }

  GetCategoryDataList() {
    this.CatSer.getCategoryList().subscribe(
      (res: any) => {
        console.log(res); // Log the response
      }
    );
  }
  
}
