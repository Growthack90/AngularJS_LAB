import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-profilo-saluto',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="profilo-saluto">
      <h2>{{ messaggioCompleto() }}</h2>
      <p>Nome in maiuscolo: {{ nomeMaiuscolo() }}</p>
      <p>Lunghezza del nome: {{ lunghezzaNome() }}</p>
    </section>
  `,
  styles: `
    .profilo-saluto {
      margin-top: 1rem;
      padding: 1rem;
      border: 1px solid #cfe3d6;
      border-radius: 12px;
      background: #f5fbf7;
    }

    h2 {
      margin: 0 0 0.5rem;
      color: #1f5c3f;
    }

    p {
      margin: 0.25rem 0;
    }
  `,
})
export class ProfiloSaluto {
  readonly nome = input.required<string>();
  readonly ruolo = input('studente Angular');

  readonly nomeMaiuscolo = computed(() => this.nome().toUpperCase());
  readonly lunghezzaNome = computed(() => this.nome().trim().length);
  readonly messaggioCompleto = computed(
    () => `Benvenuto ${this.nome()}, ${this.ruolo()}!`,
  );
}
