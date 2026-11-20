import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaInvitados } from './lista-invitados';

describe('ListaInvitados', () => {
  let component: ListaInvitados;
  let fixture: ComponentFixture<ListaInvitados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaInvitados],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaInvitados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
