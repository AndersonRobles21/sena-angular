import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.html'
})
export class SidebarMenuComponent implements OnInit {
  title = '';

  constructor(private menu: MenuService) {}

  ngOnInit() {
    this.menu.title$.subscribe(t => this.title = t);
  }
}
