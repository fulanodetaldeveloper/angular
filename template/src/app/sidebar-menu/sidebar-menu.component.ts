import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarMenuService } from '../shared/sidebar-menu.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar-menu',
  imports: [MatSidenavModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
  private subscription: Subscription;
  isSidebarOpen = false;

  constructor(private sidebarMenuService: SidebarMenuService) {
    this.subscription = this.sidebarMenuService.sidebarState$.subscribe(state => {
      this.isSidebarOpen = state;
    });
  }

  toggleSidebar() {
    this.sidebarMenuService.toggleSidebar();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
