import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.html'
})
export class SidebarLeftComponent {
  active = 'home';

  constructor(private menu: MenuService) {}

  select(type: string) {
    this.active = type;
    this.menu.setTitle('Home');
  }
}
