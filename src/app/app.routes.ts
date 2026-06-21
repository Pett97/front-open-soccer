import { Routes } from '@angular/router';
import { Alunos } from './pages/alunos/alunos';
import { Mensalidade } from './pages/mensalidade/mensalidade';

export const routes: Routes = [
   { path: '', redirectTo: 'alunos', pathMatch: 'full' },

   { path: 'alunos', component: Alunos },
   { path: 'mensalidades', component: Mensalidade },
];