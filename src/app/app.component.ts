import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./Component/add-employee/add-employee.component";
import { EmployeeListComponent } from "./Component/employee-list/employee-list.component";
import { DataBindingComponent } from "./Component/data-binding/data-binding.component";
import { DirectiveComponent } from "./Component/directive/directive.component";
import { NavbarComponentComponent } from "./Component/navbar-component/navbar-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddEmployeeComponent, EmployeeListComponent, DataBindingComponent, DirectiveComponent, NavbarComponentComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_Project_18';
}
