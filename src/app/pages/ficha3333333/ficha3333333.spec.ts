import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ficha3333333 } from './ficha3333333';

describe('Ficha3333333', () => {
  let component: Ficha3333333;
  let fixture: ComponentFixture<Ficha3333333>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ficha3333333]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ficha3333333);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
