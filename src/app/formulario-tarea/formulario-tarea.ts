import { Component, inject } from '@angular/core';
import { Tareas } from '../tareas';

@Component({
  imports: [],
  selector: 'app-formulario-tarea',
  styleUrl: './formulario-tarea.css',
  templateUrl: './formulario-tarea.html',
})
export class FormularioTarea {
  tarea = inject(Tareas);
}
