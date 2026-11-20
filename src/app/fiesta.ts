import { Service, signal, computed } from '@angular/core';

@Service()
export class Fiesta {
  lista = signal<string[]>([]);
  contador = computed(() => this.lista().length);

  invitar(nombre: string) {
    if (nombre.trim() === '') return;
    this.lista.update((anterior) => [...anterior, nombre]);
  }
}
