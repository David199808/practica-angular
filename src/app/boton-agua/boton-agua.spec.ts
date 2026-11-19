import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotonAgua } from './boton-agua';

describe('BotonAgua', () => {
  let component: BotonAgua;
  let fixture: ComponentFixture<BotonAgua>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonAgua],
    }).compileComponents();

    fixture = TestBed.createComponent(BotonAgua);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
