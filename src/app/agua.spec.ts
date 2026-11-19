import { TestBed } from '@angular/core/testing';
import { Agua } from './agua';

describe('Agua', () => {
  let service: Agua;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Agua);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
