import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DirectiveComponent {
isShow:boolean= false;
isActive:any = false;
selectedItem:any= ''
num1:string = ''
num2:string = ''

checkBoxTesting:boolean = false;
val1 : string = ''
val2 : string = ''
divColor:string = 'bg-primary'

isToggle:boolean = false;
selectedTest : string = ''

objectArray:any[]=[
  {id:1,name:"nilesh1",address:"surat1"},
  {id:2,name:"nilesh2",address:"surat2"},
  {id:3,name:"nilesh3",address:"surat3"},
  {id:4,name:"nilesh4",address:"surat4"},
  {id:5,name:"nilesh5",address:"surat5"}
]


  Show(){
    console.log('hello')
    this.isShow = true
    console.log(this.isShow)
  }
  hide(){
    console.log('hello')
    this.isShow = false;
    console.log(this.isShow)
  }

  toggle(){
    this.isShow = !this.isShow;
  }
  ApplyBlue(){
    this.divColor = 'bg-primary'
  }
  ApplyRed(){
    this.divColor = 'bg-danger'
  }
  Toggel(){
    this.isToggle = !this.isToggle
  }
}
