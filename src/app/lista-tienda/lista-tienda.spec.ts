import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTienda } from './lista-tienda';

describe('ListaTienda', () => {
  let component: ListaTienda;
  let fixture: ComponentFixture<ListaTienda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTienda],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTienda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
