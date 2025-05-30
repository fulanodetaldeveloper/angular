import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component'
import { SidenavComponent } from '../sidenav/sidenav.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolbarComponent, SidenavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
