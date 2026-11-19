import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioMercado } from './formulario-mercado';

describe('FormularioMercado', () => {
  let component: FormularioMercado;
  let fixture: ComponentFixture<FormularioMercado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMercado],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioMercado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
