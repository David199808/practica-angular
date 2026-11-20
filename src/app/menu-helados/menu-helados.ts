import { Component, inject } from '@angular/core';
import { Pedido } from '../pedido';

@Component({
  imports: [],
  selector: 'app-menu-helados',
  styleUrl: './menu-helados.css',
  templateUrl: './menu-helados.html',
})
export class MenuHelados {
  pedido = inject(Pedido);

  helados = [
    { id: 1, sabor: 'Fresa' },
    { id: 2, sabor: 'Chocolate' },
    { id: 3, sabor: 'Mango' },
  ];
}
