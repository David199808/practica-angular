import { Service, signal, computed } from '@angular/core';

type Item = {
  id: number;
  tamano: string;
  cantidad: number;
};

@Service()
export class Pedido {
  items = signal<Item[]>([]);
  total = computed(() => this.items().reduce((suma, pedido) => suma + pedido.cantidad, 0));

  agregar(pedido: Omit<Item, 'cantidad'>) {
    const existe = this.items().find((p) => p.id === pedido.id && p.tamano === pedido.tamano);
    if (existe) {
      existe.cantidad += 1;
      this.items.set([...this.items()]);
    } else {
      this.items.update((anterior) => [...anterior, { ...pedido, cantidad: 1 }]);
    }
  }
}
