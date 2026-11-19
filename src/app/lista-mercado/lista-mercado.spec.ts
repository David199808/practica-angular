import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaMercado } from './lista-mercado';

describe('ListaMercado', () => {
  let component: ListaMercado;
  let fixture: ComponentFixture<ListaMercado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMercado],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMercado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
