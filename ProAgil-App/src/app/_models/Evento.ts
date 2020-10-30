/**
 * @file Evento.ts
 * @author: Paulo Alves
 * @description: interface responsável pela definição das propriedades da entidade Evento.
 * @version 1.0.1 (27/10/2020)
 */

import { Lote } from './Lote';
import { RedeSocial } from './RedeSocial';
import { Palestrante } from './Palestrante';

/**
 * Interface para declaração das propriedades da entidade Evento.
 */
export interface Evento {
    id: number;
    local: string;
    dataEvento: Date;
    tema: string;
    qtdPessoas: number;
    imagemURL: string;
    telefone: string;
    email: string;
    lotes: Lote[];
    redesSociais: RedeSocial[];
    palestranteEventos: Palestrante[];
}
