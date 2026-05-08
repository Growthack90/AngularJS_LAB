import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <h2>Home</h2>
      <p>Questa e la pagina Home.</p>

      <button (click)="counter = counter + 1">Incrementa contatore</button>
      <p>Contatore: {{ counter }}</p>

      <button (click)="cambiaColoreTesto()">Cambia colore testo</button>
      <p [style.color]="coloreTesto">Testo con colore dinamico</p>

    </section>
  `
})

export class Home {

  counter = 0;
  
  coloreTesto = 'blue';

  cambiaColoreTesto() {
    this.coloreTesto = this.coloreTesto === 'blue' ? 'green' : 'blue';
  }

}
