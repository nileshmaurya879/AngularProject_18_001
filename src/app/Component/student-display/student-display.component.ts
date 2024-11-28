import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-display.component.html',
  styleUrl: './student-display.component.scss'
})
export class StudentDisplayComponent {

    studList:any[]=[
      {SrNo:1, StudentName:"Mohan Kumar", Age:27, IsActive:true, Marks:26},
      {SrNo:2, StudentName:"Sohan Kumar", Age:29, IsActive:false, Marks:30},
      {SrNo:3, StudentName:"Nilesh Kumar", Age:50, IsActive:false, Marks:60},
      {SrNo:4, StudentName:"Rohit Kumar", Age:60, IsActive:true, Marks:90},
      {SrNo:5, StudentName:"Komal Maurya", Age:28, IsActive:false, Marks:10},
    ]
}
