import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.scss'
})
export class NavbarComponentComponent {

}
