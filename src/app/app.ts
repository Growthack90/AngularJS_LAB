import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfiloSaluto } from './profilo-saluto/profilo-saluto';
import { Saluto } from './saluto/saluto';
import { ComponenteDiProva } from './componente-di-prova/componente-di-prova';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saluto, ProfiloSaluto, ComponenteDiProva],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miaprima-app');
  protected readonly nomeUtente = signal('Mimmone');
}
