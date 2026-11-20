import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaPedidoHelados } from './lista-pedido-helados';

describe('ListaPedidoHelados', () => {
  let component: ListaPedidoHelados;
  let fixture: ComponentFixture<ListaPedidoHelados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPedidoHelados],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPedidoHelados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
