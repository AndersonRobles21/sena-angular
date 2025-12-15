import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerRoute, RenderMode } from '@angular/ssr';
import { Home } from './pages/home/home';
import { Ficha3066474 } from './pages/ficha3066474/ficha3066474';
import { Ficha3333333 } from './pages/ficha3333333/ficha3333333';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'ficha3066474', component: Ficha3066474 },
  { path: 'ficha3333333', component: Ficha3333333 }
];

export const serverRoutes = [
  { path: '', component: Home, renderMode: RenderMode.Server },
  { path: 'ficha3066474', component: Ficha3066474, renderMode: RenderMode.Server },
  { path: 'ficha3333333', component: Ficha3333333, renderMode: RenderMode.Server }
] as unknown as ServerRoute[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
