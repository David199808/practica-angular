import { Component, inject } from '@angular/core';
import { Fiesta } from '../fiesta';
@Component({
  imports: [],
  selector: 'app-lista-invitados',
  styleUrl: './lista-invitados.css',
  templateUrl: './lista-invitados.html',
})
export class ListaInvitados {
  fiesta = inject(Fiesta);
}
