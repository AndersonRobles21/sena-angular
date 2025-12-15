import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private titleSource = new BehaviorSubject<string>('SENA');
  title$ = this.titleSource.asObservable();

  setTitle(title: string) {
    this.titleSource.next(title);
  }
}
