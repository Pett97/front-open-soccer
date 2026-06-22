import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MensalidadesApi } from './mensalidade.api';
import { MensalidadeInterface } from '../../core/models/mensalidade';
import { CommonModule } from '@angular/common';
import { MensalidadeForm } from './mensalidade-form/mensalidade-form';

@Component({
  selector: 'app-mensalidade',
  standalone: true,
  imports: [CommonModule, MensalidadeForm],
  templateUrl: './mensalidade.html',
  styleUrl: './mensalidade.scss',
})
export class Mensalidade {
  private api = inject(MensalidadesApi);
  mensalidades$: Observable<MensalidadeInterface[]> = this.api.list();
  showModal: boolean = false;

  toogleModal(): void {
    this.showModal = !this.showModal;
  }

  recarregarDados() {
    this.mensalidades$ = this.api.list();
  }
}