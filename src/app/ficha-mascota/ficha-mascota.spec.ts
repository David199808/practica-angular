import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichaMascota } from './ficha-mascota';

describe('FichaMascota', () => {
  let component: FichaMascota;
  let fixture: ComponentFixture<FichaMascota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaMascota],
    }).compileComponents();

    fixture = TestBed.createComponent(FichaMascota);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
