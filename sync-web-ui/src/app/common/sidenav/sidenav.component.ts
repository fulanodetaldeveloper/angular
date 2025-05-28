import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  private subscription: Subscription;
  isSidebarOpen = true;
  constructor(private commonService: CommonService) {
    this.subscription = this.commonService.sidebarState$.subscribe(state => {
      this.isSidebarOpen = state;
    });
  }

  toggleSidebar() {
    this.commonService.toggleSidebar();
  }

    ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
