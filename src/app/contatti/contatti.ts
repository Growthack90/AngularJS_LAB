import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contatti',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <h2>Contatti</h2>
      <p>Questa e la pagina Contatti.</p>
    </section>
  `
})
export class Contatti {}
