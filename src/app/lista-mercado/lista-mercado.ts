import { Component, inject } from '@angular/core';
import { Mercado } from '../mercado';

@Component({
  imports: [],
  selector: 'app-lista-mercado',
  styleUrl: './lista-mercado.css',
  templateUrl: './lista-mercado.html',
})
export class ListaMercado {
  mercado = inject(Mercado);
}
