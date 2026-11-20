import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioTienda } from './formulario-tienda';

describe('FormularioTienda', () => {
  let component: FormularioTienda;
  let fixture: ComponentFixture<FormularioTienda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioTienda],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioTienda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
