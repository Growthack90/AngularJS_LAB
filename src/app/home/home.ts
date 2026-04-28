import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <h2>Home</h2>
      <p>Questa e la pagina Home.</p>
    </section>
  `
})
export class Home {}
