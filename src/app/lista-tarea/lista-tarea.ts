import { Component, inject } from '@angular/core';
import { Tareas } from '../tareas';

@Component({
  imports: [],
  selector: 'app-lista-tarea',
  styleUrl: './lista-tarea.css',
  templateUrl: './lista-tarea.html',
})
export class ListaTarea {
  tarea = inject(Tareas);
}
