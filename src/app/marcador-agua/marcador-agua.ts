import { Component, inject } from '@angular/core';
import { Agua } from '../agua';

@Component({
  imports: [],
  selector: 'app-marcador-agua',
  styleUrl: './marcador-agua.css',
  templateUrl: './marcador-agua.html',
})
export class MarcadorAgua {
  agua = inject(Agua);
}
