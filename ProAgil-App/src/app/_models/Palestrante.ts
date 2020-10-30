/**
 * @file Palestrante.ts
 * @author: Paulo Alves
 * @description: interface responsável pela definição das propriedades da entidade Palestrante.
 * @version 1.0.1 (27/10/2020)
 */

import { RedeSocial } from './RedeSocial';
import { Evento } from './Evento';

/**
 * Interface para declaração das propriedades da entidade Palestrante.
 */
export interface Palestrante {
    id: number;
    nome: string;
    miniCurriculo: string;
    imagemURL: string;
    telefone: string;
    email: string;
    redesSociais: RedeSocial[];
    PalestranteEventos: Evento[];
}
