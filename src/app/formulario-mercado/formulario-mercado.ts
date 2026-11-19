import { Component, inject } from '@angular/core';
import { Mercado } from '../mercado';

@Component({
  imports: [],
  selector: 'app-formulario-mercado',
  styleUrl: './formulario-mercado.css',
  templateUrl: './formulario-mercado.html',
})
export class FormularioMercado {
  mercado = inject(Mercado);
}
