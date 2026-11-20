import { Service, signal, computed } from '@angular/core';

@Service()
export class Tareas {
  lista = signal<string[]>([]);
  total = computed(() => this.lista().length);

  agregar(tareas: string) {
    if (tareas.trim() === '') return;
    this.lista.update((anterior) => [...anterior, tareas]);
  }
}
