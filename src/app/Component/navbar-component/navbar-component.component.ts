import { Component } from '@angular/core';
import { DirectiveComponent } from "../directive/directive.component";
import { StudentDisplayComponent } from "../student-display/student-display.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [DirectiveComponent, StudentDisplayComponent,RouterLink],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.scss'
})
export class NavbarComponentComponent {

}
