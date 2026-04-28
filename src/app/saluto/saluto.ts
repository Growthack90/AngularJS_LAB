import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-saluto',
  imports: [],
  templateUrl: './saluto.html',
  styles: `
    .saluto { font-family: sans-serif; padding: 1rem; background: #e8f4f8; border-radius: 8px; }
    button { margin-top: 0.5rem; padding: 0.4rem 1rem; cursor: pointer; }
  `,
})
export class Saluto {
  nome = signal('Mondo');

  cambiaNome() {
    this.nome.set('Angular!');
  }
}
