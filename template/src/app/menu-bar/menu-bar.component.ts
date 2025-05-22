import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarMenuService } from '../shared/sidebar-menu.service';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  constructor(private sidebarMenuService: SidebarMenuService) {}
  toggleSidebar() {
    this.sidebarMenuService.toggleSidebar();
  }
}
