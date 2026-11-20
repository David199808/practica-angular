import { Component, inject } from '@angular/core';
import { ServicioTienda } from '../servicio-tienda';

@Component({
  imports: [],
  selector: 'app-lista-tienda',
  styleUrl: './lista-tienda.css',
  templateUrl: './lista-tienda.html',
})
export class ListaTienda {
  tienda = inject(ServicioTienda);
}
