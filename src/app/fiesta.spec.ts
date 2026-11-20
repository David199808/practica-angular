import { TestBed } from '@angular/core/testing';
import { Fiesta } from './fiesta';

describe('Fiesta', () => {
  let service: Fiesta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fiesta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
