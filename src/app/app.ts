import { Component, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { TarjetaProducto, Producto } from './tarjeta-producto/tarjeta-producto';
import { TarjetaEstudiante } from './tarjeta-estudiante/tarjeta-estudiante';

import { ItemTarea } from './item-tarea/item-tarea';
import { BotonAgua } from './boton-agua/boton-agua';
import { MarcadorAgua } from './marcador-agua/marcador-agua';
import { ListaMercado } from './lista-mercado/lista-mercado';
import { FormularioMercado } from './formulario-mercado/formulario-mercado';

@Component({
  imports: [
    CurrencyPipe,
    TarjetaProducto,
    TarjetaEstudiante,
    ItemTarea,
    BotonAgua,
    MarcadorAgua,
    ListaMercado,
    FormularioMercado,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('practica-angular');
  nombre = 'Juan David';
  contador = 0;
  frutas = ['mango', 'fresa', 'banano'];
  productos = [
    { id: 1, nombre: 'Buzo', precio: 20000 },
    { id: 2, nombre: 'Jeans', precio: 50000 },
    { id: 3, nombre: 'Hoodie', precio: 80000 },
  ];
  total = 0;
  estudiantes = [
    { id: 1, nombre: 'Juan', nota: 3.0 },
    { id: 2, nombre: 'Laura', nota: 2.0 },
    { id: 3, nombre: 'Mia', nota: 3.0 },
  ];

  tareas = [
    { id: 1, titulo: 'Lavar', hecha: false },
    { id: 2, titulo: 'Barrer', hecha: false },
    { id: 3, titulo: 'Limpiar', hecha: false },
  ];
  sumar() {
    this.contador++;
  }
  restar() {
    if (this.contador <= 0) return;
    this.contador--;
  }
  reiniciar() {
    this.contador = 0;
  }

  sumarAlTotal(producto: Producto) {
    this.total += producto.precio;
  }

  completar(id: number) {
    const tarea = this.tareas.find((tarea) => tarea.id === id);
    if (!tarea) return; // guardia: ¿existe?
    tarea.hecha = true; // find NO devuelve una copia → cambia la de la lista
  }

  pendientes(): number {
    // ¿Cuantos cumplen algo?
    return this.tareas.filter((tarea) => !tarea.hecha).length;
  }
}
