import { Component, input } from '@angular/core';

export interface Estudiante {
  id: number;
  nombre: string;
  nota: number;
}

@Component({
  imports: [],
  selector: 'app-tarjeta-estudiante',
  styleUrl: './tarjeta-estudiante.css',
  templateUrl: './tarjeta-estudiante.html',
})
export class TarjetaEstudiante {
  estudiante = input.required<Estudiante>();
}
