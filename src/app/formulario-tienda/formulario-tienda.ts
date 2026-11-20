import { Component, inject } from '@angular/core';
import { ServicioTienda } from '../servicio-tienda';

@Component({
  imports: [],
  selector: 'app-formulario-tienda',
  styleUrl: './formulario-tienda.css',
  templateUrl: './formulario-tienda.html',
})
export class FormularioTienda {
  tienda = inject(ServicioTienda);
}
