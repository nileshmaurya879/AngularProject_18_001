import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent {

  /*   Creation   */
  /**1**/
  constructor(){
    console.log('Constructor............')
  }
 /*Change Detection*/
 /*1*/
  ngOnInit(){
    console.log('ngOnInit............')
  }

  /*2*/
  ngOnChanges(){
    console.log('ngOnChanges............') 
  }
}
