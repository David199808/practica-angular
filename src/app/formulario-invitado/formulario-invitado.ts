import { Component, inject } from '@angular/core';
import { Fiesta } from '../fiesta';

@Component({
  imports: [],
  selector: 'app-formulario-invitado',
  styleUrl: './formulario-invitado.css',
  templateUrl: './formulario-invitado.html',
})
export class FormularioInvitado {
  fiesta = inject(Fiesta);
}
