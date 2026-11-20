import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioInvitado } from './formulario-invitado';

describe('FormularioInvitado', () => {
  let component: FormularioInvitado;
  let fixture: ComponentFixture<FormularioInvitado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioInvitado],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioInvitado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
