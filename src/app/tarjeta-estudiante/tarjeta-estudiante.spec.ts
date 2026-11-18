import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaEstudiante } from './tarjeta-estudiante';

describe('TarjetaEstudiante', () => {
  let component: TarjetaEstudiante;
  let fixture: ComponentFixture<TarjetaEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaEstudiante],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaEstudiante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
