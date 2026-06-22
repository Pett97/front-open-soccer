import { Routes } from '@angular/router';
import { Alunos } from './pages/alunos/alunos';
import { Mensalidade } from './pages/mensalidade/mensalidade';

export const routes: Routes = [
   { path: '', redirectTo: 'alunos', pathMatch: 'full' },

   { path: 'alunos', component: Alunos },
   {
      path: "mensalidades",
      loadChildren: () => import("./pages/mensalidade/mensalidade.routes").then(m => m.MENSALIDADE_ROUTES)
   }
];