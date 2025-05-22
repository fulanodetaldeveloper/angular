import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, SidebarMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template';
}
