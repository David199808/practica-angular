import { Service, signal } from '@angular/core';

@Service()
export class Mercado {
  lista = signal<string[]>([]);

  agregar(producto: string) {
    if (producto.trim() === '') return;
    this.lista.update((anterior) => [...anterior, producto]);
  }
}
