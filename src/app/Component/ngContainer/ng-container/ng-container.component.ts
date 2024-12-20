import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.scss'
})
export class NgContainerComponent {
  isNgContainer:boolean
  httpservice:any;
  catObj:any
  constructor(http:HttpClient){
    this.isNgContainer = true;
    this.httpservice = http
    this.getCategoryData();
  }

  getCategoryData(){
    this.httpservice.get("https://localhost:44323/api/Category").subscribe((res:any)=>{
      setTimeout(()=>{
        console.log(res);
        this.isNgContainer = false;
        this.catObj = res

      },2000)
    })
  }
}
