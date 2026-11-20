import { Component, inject } from '@angular/core';
import { Fiesta } from '../fiesta';

@Component({
  imports: [],
  selector: 'app-contador-invitados',
  styleUrl: './contador-invitados.css',
  templateUrl: './contador-invitados.html',
})
export class ContadorInvitados {
  fiesta = inject(Fiesta);
}
