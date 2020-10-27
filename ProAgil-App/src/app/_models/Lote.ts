/**
 * @file Lote.ts
 * @author: Paulo Alves
 * @description: interface responsável pela definição das propriedades da entidade Lote.
 * @version 1.0.1 (27/10/2020)
 */

export interface Lote {
    id: number;
    nome: string;
    preco: number;
    dataInicio: Date;
    dataFim: Date;
    quantidade: number;
    eventoId: number;
}
