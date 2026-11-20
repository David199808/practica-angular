import { Component, inject } from '@angular/core';
import { Pedido } from '../pedido';

@Component({
  imports: [],
  selector: 'app-lista-pedido-helados',
  styleUrl: './lista-pedido-helados.css',
  templateUrl: './lista-pedido-helados.html',
})
export class ListaPedidoHelados {
  pedido = inject(Pedido);
}
