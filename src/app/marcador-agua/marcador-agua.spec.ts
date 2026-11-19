import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarcadorAgua } from './marcador-agua';

describe('MarcadorAgua', () => {
  let component: MarcadorAgua;
  let fixture: ComponentFixture<MarcadorAgua>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcadorAgua],
    }).compileComponents();

    fixture = TestBed.createComponent(MarcadorAgua);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
