import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss'
})
export class MyButtonComponent {
    @Input() btnClass:string | undefined
    @Input() btnText:string | undefined

    @Output() btnClick = new EventEmitter<any>()
    onClick(){
        this.btnClick.emit();
    }
}
