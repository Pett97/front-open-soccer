import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api/api.service.ts';
import { MensalidadeInterface as Mensalidade } from '../../core/models/mensalidade.js';

@Injectable({
   providedIn: 'root'
})
export class MensalidadesApi {

   private endpoint = '/mensalidades';

   constructor(private api: ApiService) { }

   list() {
      return this.api.get<Mensalidade[]>(this.endpoint);
   }

   find(id: number) {
      return this.api.get<Mensalidade>(`${this.endpoint}/${id}`);
   }

   create(data: Partial<Mensalidade>) {
      return this.api.post<Mensalidade>(this.endpoint, data);
   }

   update(id: number, data: Partial<Mensalidade>) {
      return this.api.put<Mensalidade>(`${this.endpoint}/${id}`, data);
   }

   delete(id: number) {
      return this.api.delete(`${this.endpoint}/${id}`);
   }
}