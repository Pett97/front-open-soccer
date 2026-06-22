import Decimal from "decimal.js";

export interface MensalidadeInterface {
   id: number;
   nome: string;
   valor: Decimal;
   deletadaAt?: Date;
}