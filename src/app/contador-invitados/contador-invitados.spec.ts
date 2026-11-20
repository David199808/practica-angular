import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContadorInvitados } from './contador-invitados';

describe('ContadorInvitados', () => {
  let component: ContadorInvitados;
  let fixture: ComponentFixture<ContadorInvitados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorInvitados],
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorInvitados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
