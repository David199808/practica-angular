import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Component({
  imports: [CurrencyPipe],
  selector: 'app-tarjeta-producto',
  styleUrl: './tarjeta-producto.css',
  templateUrl: './tarjeta-producto.html',
})
export class TarjetaProducto {
  producto = input.required<Producto>();
  agregar = output<Producto>();

  avisar() {
    this.agregar.emit(this.producto());
  }
}
