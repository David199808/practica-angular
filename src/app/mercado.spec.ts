import { TestBed } from '@angular/core/testing';
import { Mercado } from './mercado';

describe('Mercado', () => {
  let service: Mercado;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mercado);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
