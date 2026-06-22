import { Routes } from '@angular/router';

export const MENSALIDADE_ROUTES: Routes = [
   {
      path: '',
      loadComponent: () => import('./mensalidade').then(m => m.Mensalidade)
   },
   {
      path: 'nova',
      loadComponent: () => import('./mensalidade-form/mensalidade-form').then(m => m.MensalidadeForm)
   },
   {
      path: 'editar/:id',
      // Opcional: Se quiser usar o mesmo formulário para editar passando o ID
      loadComponent: () => import('./mensalidade-form/mensalidade-form').then(m => m.MensalidadeForm)
   }
];