import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.scss'
})


export class PostApiComponent {
  // test002:MyTest001
  constructor(private http: HttpClient) { }
  studObj: FormGroup = new FormGroup({
    CategoryName: new FormControl(),
    Operation: new FormControl('ADD')
  })

  postCategoryData() {
    debugger;
    console.log(JSON.stringify(this.studObj.value));
    //  this.test002 = this.studObj;
    this.http.post("https://localhost:44323/api/Category/AddCategory_002", this.studObj.value, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe((res: any) => {
      console.log(res);
    }, error => {
      console.error('Error posting data:', error);
    });

  }
  ResetCategoryData() {
    this.studObj = new FormGroup({
      firstName: new FormControl()
    })
  }
}
