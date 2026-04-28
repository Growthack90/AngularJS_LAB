import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saluto } from './saluto/saluto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saluto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miaprima-app');
}
