/**
 * @file RedeSocial.ts
 * @author: Paulo Alves
 * @description: interface responsável pela definição das propriedades da entidade RedeSocial.
 * @version 1.0.1 (27/10/2020)
 */

/**
 * Interface para declaração das propriedades da entidade RedeSocial.
 */
export interface RedeSocial {
    id: number;
    nome: string;
    uRL: string;
    eventoId?: number;
    palestranteId?: number;
}
