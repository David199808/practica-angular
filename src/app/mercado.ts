import { Service, signal } from '@angular/core';

@Service()
export class Mercado {
  lista = signal<string[]>([]);

  agregar(producto: string) {
    this.lista.update((anterior) => [...anterior, producto]);
  }
}
