import { Component, inject } from '@angular/core';
import { Agua } from '../agua';

@Component({
  imports: [],
  selector: 'app-boton-agua',
  styleUrl: './boton-agua.css',
  templateUrl: './boton-agua.html',
})
export class BotonAgua {
  agua = inject(Agua);
}
