import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})

export class DataBindingComponent {
  rollNo: number = 12;
  studentName: string = 'Nilesh Kumar Maurya';
  studentAddress =  'Surat';
  
}
