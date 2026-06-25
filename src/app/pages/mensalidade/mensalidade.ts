import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MensalidadesApi } from './mensalidade.api';
import { MensalidadeInterface } from '../../core/models/mensalidade';
import { CommonModule } from '@angular/common';
import { MensalidadeForm } from './mensalidade-form/mensalidade-form';
import { ToastService, ToastStatus } from '../../shared/toast';

@Component({
  selector: 'app-mensalidade',
  standalone: true,
  imports: [CommonModule, MensalidadeForm],
  templateUrl: './mensalidade.html',
  styleUrl: './mensalidade.scss',
})
export class Mensalidade {
  private api = inject(MensalidadesApi);
  private toast = inject(ToastService);
  mensalidades$: Observable<MensalidadeInterface[]> = this.api.list();
  showModal: boolean = false;
  mensalidadeSelecionada: MensalidadeInterface | null = null;


  editar(mensalidade: MensalidadeInterface): void {
    this.mensalidadeSelecionada = mensalidade;
    this.showModal = true;
  }

  deletar(idMensalidade: number): void {
    this.api.delete(idMensalidade).subscribe({
      next: () => {
        this.toast.show('Deletado com sucesso!',ToastStatus.SUCCESS);
        this.recarregarDados();
      },
      error: () => {
        this.toast.show('Erro ao deletar!', ToastStatus.ERROR);
      }
    });
  }

  onFecharModal(): void {
    this.toogleModal();
    this.recarregarDados();
  }

  toogleModal(): void {
    this.showModal = !this.showModal;

    if (!this.showModal) {
      this.mensalidadeSelecionada = null;
    }
  }

  recarregarDados() {
    this.mensalidades$ = this.api.list();
  }

}