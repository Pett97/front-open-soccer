import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastService, ToastStatus } from '../toast';

@Component({
  selector: 'app-toast-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './toast-component.html',
  styleUrl: './toast-component.scss',
})
export class ToastComponent {
  private toastService = inject(ToastService);

  toast$ = this.toastService.toast$;

  ToastStatus = ToastStatus;
}
