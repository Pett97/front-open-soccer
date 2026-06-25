import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {
   message: string;
   type: ToastStatus
}

export enum ToastStatus {
   SUCCESS,
   ERROR,
   ALERT,
}

@Injectable({ providedIn: 'root' })
export class ToastService {

   private toastSubject = new Subject<Toast | null>();
   toast$ = this.toastSubject.asObservable();

   show(message: string, type: ToastStatus) {
      this.toastSubject.next({ message, type });

      setTimeout(() => {
         this.toastSubject.next(null);
      }, 3000);
   }
}