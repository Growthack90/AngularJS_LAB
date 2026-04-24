# Struttura progetto

Ecco la struttura del progetto passo per passo:

---

## Flusso di avvio

```
index.html  →  main.ts  →  app.config.ts  →  app.ts  →  app.html
```

---

## File principali

### index.html
La pagina HTML base. Contiene solo `<app-root>` — il tag personalizzato dove Angular inserisce l'intera applicazione.

---

### main.ts
**Punto di ingresso** dell'app. Chiama `bootstrapApplication()` passando il componente radice (`App`) e la configurazione (`appConfig`). È qui che Angular si avvia.

---

### app.config.ts
**Configurazione globale** dell'app. Qui si registrano i **provider** (servizi globali):
- `provideBrowserGlobalErrorListeners()` — gestisce errori globali
- `provideRouter(routes)` — attiva il sistema di routing

---

### app.routes.ts
Definisce le **rotte** dell'applicazione (es. `/home`, `/about`). Al momento è vuoto — nessuna rotta configurata.

---

### app.ts
Il **componente radice** (`App`). Ogni componente Angular ha:
- `selector` → il tag HTML da usare (`<app-root>`)
- `templateUrl` → il file HTML del componente
- `styleUrl` → il CSS del componente
- La classe TypeScript con la logica (qui c'è solo `title` come signal)

---

### app.html
Il **template** del componente radice. Attualmente contiene la pagina di benvenuto di default di Angular. Va sostituita con il tuo contenuto. Il tag `<router-outlet>` (già importato in app.ts) è dove Angular renderizzerà le pagine in base alla rotta attiva.

---
