import { Service, signal } from '@angular/core';

@Service()
export class Agua {
  total = signal(0);

  tomarVaso() {
    this.total.update((t) => t + 1);
  }
}
