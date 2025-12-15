import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ficha3066474 } from './ficha3066474';

describe('Ficha3066474', () => {
  let component: Ficha3066474;
  let fixture: ComponentFixture<Ficha3066474>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ficha3066474]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ficha3066474);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
