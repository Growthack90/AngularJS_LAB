# MiaprimaApp

Questo progetto contiene un esempio semplice di routing Angular con due pagine:

- Home
- Contatti

L'obiettivo e mostrare come aggiungere nuove rotte senza modificare i componenti gia esistenti del progetto.

## Avvio rapido

Per avviare il progetto in locale:

```bash
ng serve
```

Poi apri il browser su `http://localhost:4200/`.

## Tutorial: come sono state create le rotte Home e Contatti

### 1. Creazione dei componenti delle pagine

Sono stati creati due componenti standalone molto semplici:

- `src/app/home/home.ts`
- `src/app/contatti/contatti.ts`

Ogni componente stampa solo un titolo e una frase.

Esempio della pagina Home:

```ts
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
```

La pagina Contatti e stata creata nello stesso modo, cambiando solo titolo e testo.

### 2. Configurazione del file delle rotte

Nel file `src/app/app.routes.ts` e stato definito l'array `routes`.

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: 'home',
		loadComponent: () => import('./home/home').then((module) => module.Home)
	},
	{
		path: 'contatti',
		loadComponent: () => import('./contatti/contatti').then((module) => module.Contatti)
	}
];
```

Significato delle rotte:

1. Se l'utente apre `/`, viene reindirizzato a `/home`.
2. Se l'utente apre `/home`, Angular carica il componente `Home`.
3. Se l'utente apre `/contatti`, Angular carica il componente `Contatti`.

### 3. Perche e stato usato loadComponent

E stato usato `loadComponent` per caricare i componenti in lazy loading.

Questo significa che Angular carica il codice della pagina solo quando serve, invece di inserirlo subito tutto nel bundle principale.

### 4. Nessuna modifica ai componenti gia presenti

Per rispettare la richiesta, i componenti esistenti del progetto non sono stati cambiati.

Sono stati solo aggiunti:

- il file della pagina Home
- il file della pagina Contatti
- la configurazione delle rotte in `app.routes.ts`

### 5. Verifica finale

Dopo la configurazione e stata eseguita la build del progetto:

```bash
ng build
```

La build e andata a buon fine, quindi il routing risulta configurato correttamente.

## URL da provare

Una volta avviata l'app, puoi testare questi percorsi:

- `http://localhost:4200/`
- `http://localhost:4200/home`
- `http://localhost:4200/contatti`

## Comandi utili

Build di produzione:

```bash
ng build
```

Test:

```bash
ng test
```
