import { Component, inject } from '@angular/core';
import { Veterinaria } from '../veterinaria';

@Component({
  imports: [],
  selector: 'app-ficha-mascota',
  styleUrl: './ficha-mascota.css',
  templateUrl: './ficha-mascota.html',
})
export class FichaMascota {
  vete = inject(Veterinaria);

  buscar(id: number) {
    return this.vete.mascotas().find((mascota) => mascota.id === id);
  }
}
