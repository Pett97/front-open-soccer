import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { MensalidadesApi } from '../mensalidade.api';

@Component({
  selector: 'app-mensalidade-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './mensalidade-form.html',
  styleUrl: './mensalidade-form.scss',
})
export class MensalidadeForm {
  @Output() fecharModal = new EventEmitter<void>();
  private fb = inject(FormBuilder);
  private api = inject(MensalidadesApi);

  fechar() {
    this.fecharModal.emit();
  }

  form: FormGroup = this.fb.group({
    nome: ["", [Validators.required, Validators.min(3), Validators.max(255)]],
    valor: ["0", [Validators.required, Validators.min(0)]]
  });

  salvar() {
    if (this.form.valid) {
      this.api.create(this.form.value).subscribe({
        next: () => {
          this.form.reset();
          this.fechar();
        },
        error: (err) => console.error("erro ao criar nova mensalidade", err)
      });
    }
  }
}