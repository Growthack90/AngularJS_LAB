import {Component} from '@angular/core';
import { signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-di-prova',
  imports: [CommonModule, FormsModule],
  template: `
    <section class="componente prova">
      <h2>Sono il componente di prova!</h2>
      <h3>Count</h3>
      <p>Valore count: {{ count() }}</p>
      <p>Valore double: {{ double() }}</p>
      <h3>Login/Logout</h3>
      <p>currentUser: {{ currentUser() }}</p>
      <button (click)="login('Alice')">Login come Alice</button>
      <button (click)="login('Bob')">Login come Bob</button>
      <button (click)="logout()">Logout</button>
      <h3>Carrello</h3>
      <p>Prodotti nel carrello: {{ cartItems().join(', ') }}</p>
      <button (click)="addProduct('Uova')">Aggiungi Uova</button>
      <button (click)="addProduct('Formaggio')">Aggiungi Formaggio</button>
      <h3>Somma</h3>
      <p>Somma: {{ sum() }}</p>
      <button (click)="incA()">Incrementa A</button>
      <button (click)="incB()">Incrementa B</button>
    </section>
    <div>
      <h3>Lists</h3>
      <ul>
        @for (item of items(); let i = $index; track item) {
          <li>{{ i + 1 }}. {{ item }}</li>
        } @empty {
          <li>No items</li>
        }
      </ul>
      <button (click)="add()">Add Item</button>
      <button (click)="clear()">Clear</button>
      <button (click)="reset()">Reset</button>
    </div>
    <div>
      <h3>Forms</h3>
      <form #f="ngForm" (ngSubmit)="onSubmit()">
        <label>
          Name:
          <input name="name" [(ngModel)]="name" placeholder="Enter your name" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Value: {{ name }}</p>
      <p *ngIf="submitted">Submitted!</p>
    </div>
  `,
  styles: `
    .componente.prova {
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
export class ComponenteDiProva {
  // Esempio di utilizzo di signal per contatore e calcolo derivato

  readonly count = signal(0);
  readonly double = computed(() => this.count() * 2);

  constructor() {
    effect(() => console.log('count =', this.count()));
    this.count.update((n) => n + 1);

    effect(() => console.log('sum =', this.sum()));
  }

  // ###################################################### //
  // Esempio con .set() (Sostituzione totale)
  // Esempio di utilizzo di signal per gestire lo stato dell'utente:
  // in questo caso, currentUser è un signal che tiene traccia del nome dell'utente attualmente loggato (o null se nessuno è loggato).
  // Signal che tiene traccia dell'utente selezionato
  currentUser = signal<string | null>(null);

  // Caso d'uso: Login
  login(name: string) {
    // Uso .set() perché ricevo un dato nuovo (il nome)
    // e non mi interessa il valore precedente (che era null)
    this.currentUser.set(name);
  }

  // Caso d'uso: Logout
  logout() {
    this.currentUser.set(null); // Sovrascrivo con null
  }

  // ###################################################### //

  // Esempio con .update() (Modifica basata sul valore precedente)
  // Signal che tiene traccia di una lista di prodotti
  cartItems = signal<string[]>(['Pane', 'Latte']);

  // Caso d'uso: Aggiungere un prodotto
  addProduct(newItem: string) {
    // Uso .update() perché voglio PRENDERE la lista attuale
    // e aggiungerci il nuovo elemento in coda
    this.cartItems.update((currentList) => [...currentList, newItem]);
  }

  // ####################################################### //

  // Esempio di calcolo basato su più signal

  a = signal(2);
  b = signal(3);
  sum = computed(() => this.a() + this.b());

  incA() {
    this.a.update((n) => n + 1);
  }
  incB() {
    this.b.update((n) => n + 1);
  }

  // ####################################################### //

  // LISTS

  items = signal(['Angular', 'React', 'Vue']);
  add() {
    this.items.update((arr) => [...arr, 'Svelte']);
  }
  clear() {
    this.items.set([]);
  }
  reset() {
    this.items.set(['Angular', 'React', 'Vue']);
  }

  // ####################################################### //

  // FORMS
  name = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
