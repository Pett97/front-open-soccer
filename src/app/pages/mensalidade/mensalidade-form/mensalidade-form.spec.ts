import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensalidadeForm } from './mensalidade-form';

describe('MensalidadeForm', () => {
  let component: MensalidadeForm;
  let fixture: ComponentFixture<MensalidadeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensalidadeForm],
    }).compileComponents();

    fixture = TestBed.createComponent(MensalidadeForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
