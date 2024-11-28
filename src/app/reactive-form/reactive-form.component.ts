import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  studentObj:FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.required]),
    LastName: new FormControl(),
    city:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    address:new FormControl(),
    state:new FormControl('Select State'),
    zip:new FormControl(),
    isChecked:new FormControl()
  });

  formValue:any; 
  submit()
  {
    debugger
    this.formValue=this.studentObj.value
  }
  Reset(){
    this.studentObj = new FormGroup({
      firstName: new FormControl(),
      LastName: new FormControl(),
      city:new FormControl(),
      email:new FormControl(),
      password:new FormControl(),
      address:new FormControl(),
      state:new FormControl('Gujarat'),
      zip:new FormControl(),
      isChecked:new FormControl()
    });
  }
}
