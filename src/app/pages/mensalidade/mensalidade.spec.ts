import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensalidade } from './mensalidade';

describe('Mensalidade', () => {
  let component: Mensalidade;
  let fixture: ComponentFixture<Mensalidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mensalidade],
    }).compileComponents();

    fixture = TestBed.createComponent(Mensalidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
