import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-call-api-detail',
  standalone: true,
  imports: [],
  templateUrl: './call-api-detail.component.html',
  styleUrl: './call-api-detail.component.scss'
})
export class CallApiDetailComponent {

  userList:any[] = []
  constructor(private http:HttpClient){
   
  }

  getAllUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      debugger;
      this.userList = res;
    })
  }
}
