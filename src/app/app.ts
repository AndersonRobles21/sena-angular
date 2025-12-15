import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { Ficha3066474 } from "./pages/ficha3066474/ficha3066474";
import { SidebarLeftComponent } from "./layout/sidebar-left/sidebar-left";
import { SidebarMenuComponent } from "./layout/sidebar-menu/sidebar-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Ficha3066474, SidebarLeftComponent, SidebarMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sena-app');
}
