import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContadorHelados } from './contador-helados';

describe('ContadorHelados', () => {
  let component: ContadorHelados;
  let fixture: ComponentFixture<ContadorHelados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorHelados],
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorHelados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
