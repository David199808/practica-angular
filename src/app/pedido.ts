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

  restar(id: number, tamano: string) {
    // Buscar el item igual que en agregar.
    const item = this.items().find((i) => i.id === id && i.tamano === tamano);
    // Guardia: si no existe, me voy.
    if (!item) return;
    if (item.cantidad > 1) {
      //tiene más de 1 → resto 1 y aviso al portero
      item.cantidad -= 1;
      this.items.set([...this.items()]);
    } else {
      // tiene 1 -> lo quito con filter (ya crea lista nueva)
      this.items.update((anterior) => anterior.filter((i) => i !== item));
    }
  }
}
