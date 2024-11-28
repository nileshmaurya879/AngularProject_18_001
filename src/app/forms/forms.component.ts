import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  studentObj:any = {
    FirstName:'',
    LastName:'',
    UserName:'',
    City:'',
    State:'',
    ZipCode:'',
    IsAcceptTerm:false
  }

  formvalue:any;
  onSubmit(){
    debugger
    this.formvalue = this.studentObj
  }

  Reset(){
    this.studentObj= {
      FirstName:'',
      LastName:'',
      UserName:'',
      City:'',
      State:'',
      ZipCode:'',
      IsAcceptTerm:false
    }
  }
}
