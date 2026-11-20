import { Service, signal } from '@angular/core';

@Service()
export class Veterinaria {
  mascotas = signal([
    { id: 1, nombre: 'Max', vacunado: false },
    { id: 2, nombre: 'Luna', vacunado: true },
  ]);

  vacunar(id: number) {
    const mascota = this.mascotas().find((mascota) => mascota.id === id);
    if (!mascota) return;
    mascota.vacunado = true;
    this.mascotas.set([...this.mascotas()]);
  }

  registrar(nombre: string) {
    if (nombre.trim() === '') return;
    this.mascotas.update((anterior) => [
      ...anterior,
      { id: this.mascotas().length + 1, nombre: nombre, vacunado: false },
    ]);
  }
}
