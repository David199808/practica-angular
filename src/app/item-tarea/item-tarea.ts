import { Component, input, output } from '@angular/core';

export interface Tarea {
  id: number;
  titulo: string;
  hecha: boolean;
}

@Component({
  imports: [],
  selector: 'app-item-tarea',
  styleUrl: './item-tarea.css',
  templateUrl: './item-tarea.html',
})
export class ItemTarea {
  tarea = input.required<Tarea>();

  completar = output<number>(); // avisa con un número

  avisar() {
    this.completar.emit(this.tarea().id); // manda SOLO el id
  }
}
