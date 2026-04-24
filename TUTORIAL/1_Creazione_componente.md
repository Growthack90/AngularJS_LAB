# miaprima-app

Progetto Angular generato con Angular CLI v21.

---

## Avviare il progetto

```bash
npm start
```

L'app sarà disponibile su **http://localhost:4200**.

---

## Tutorial: come aggiungere un componente

Seguiamo passo per passo come è stato creato il componente **Saluto** in questo progetto.

---

### Passo 1 — Generare il componente con Angular CLI

Esegui il comando dalla root del progetto:

```bash
npx ng generate component saluto --inline-style --skip-tests
```

Questo crea due file nella cartella `src/app/saluto/`:

```
src/app/saluto/
  saluto.ts       ← logica del componente
  saluto.html     ← template HTML
```

> `--inline-style` evita un file `.css` separato (gli stili vanno dentro `saluto.ts`)  
> `--skip-tests` non genera il file `.spec.ts` di test

---

### Passo 2 — Scrivere la logica in `saluto.ts`

Il file generato è un componente **standalone** (no NgModule). Aggiungi la logica:

```typescript
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-saluto',       // il tag HTML da usare nel template
  imports: [],                  // altri componenti/direttive usati qui
  templateUrl: './saluto.html', // template HTML esterno
  styles: `
    .saluto { font-family: sans-serif; padding: 1rem; background: #e8f4f8; border-radius: 8px; }
    button  { margin-top: 0.5rem; padding: 0.4rem 1rem; cursor: pointer; }
  `,
})
export class Saluto {
  nome = signal('Mondo');   // stato reattivo: valore iniziale 'Mondo'

  cambiaNome() {
    this.nome.set('Angular!');  // aggiorna il signal
  }
}
```

**Concetti chiave:**

| Elemento | Descrizione |
|---|---|
| `signal('Mondo')` | crea uno stato reattivo con valore iniziale |
| `this.nome.set(...)` | aggiorna il valore del signal |
| `selector: 'app-saluto'` | definisce il tag HTML `<app-saluto />` |

---

### Passo 3 — Scrivere il template in `saluto.html`

```html
<div class="saluto">
  <h2>Ciao, {{ nome() }}!</h2>
  <button (click)="cambiaNome()">Cambia nome</button>
</div>
```

**Concetti chiave:**

| Sintassi | Tipo | Descrizione |
|---|---|---|
| `{{ nome() }}` | interpolazione | visualizza il valore del signal |
| `(click)="cambiaNome()"` | event binding | chiama il metodo al click |

> I signal si leggono **come funzioni**: `nome()` non `nome`.

---

### Passo 4 — Registrare il componente nel padre (`app.ts`)

Per usare `<app-saluto />` nel template di `App`, bisogna importare la classe nell'array `imports`:

```typescript
// src/app/app.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saluto } from './saluto/saluto';   // ← importa la classe

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saluto],           // ← aggiungila qui
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miaprima-app');
}
```

---

### Passo 5 — Usare il componente nel template (`app.html`)

Aggiungi il tag del componente dove vuoi che appaia:

```html
<!-- src/app/app.html -->
<app-saluto />
<router-outlet />
```

---

### Risultato finale

```
src/app/
├── app.ts            ← importa Saluto negli imports
├── app.html          ← usa <app-saluto />
└── saluto/
    ├── saluto.ts     ← logica + stili
    └── saluto.html   ← template
```

All'avvio (`npm start`) vedrai il titolo "Ciao, Mondo!" e un bottone che al click lo cambia in "Ciao, Angular!".

---

## Comandi utili

| Comando | Descrizione |
|---|---|
| `npm start` | avvia il server di sviluppo |
| `ng generate component nome` | crea un nuovo componente |
| `ng build` | compila per la produzione |
| `ng test` | esegue i test unitari |
