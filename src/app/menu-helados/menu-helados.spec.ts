import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuHelados } from './menu-helados';

describe('MenuHelados', () => {
  let component: MenuHelados;
  let fixture: ComponentFixture<MenuHelados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuHelados],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuHelados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
