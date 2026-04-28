import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: ''   // per evitare di avere un redirect loop, altrimenti si potrebbe mettere 'home' e poi modificare il path della route home in '' (vuoto)
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
