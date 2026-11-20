import { Component, inject } from '@angular/core';
import { Pedido } from '../pedido';

@Component({
  imports: [],
  selector: 'app-contador-helados',
  styleUrl: './contador-helados.css',
  templateUrl: './contador-helados.html',
})
export class ContadorHelados {
  pedido = inject(Pedido);
}
