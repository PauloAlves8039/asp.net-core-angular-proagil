
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos
{
    /// <summary>
    /// Classe responsável pela utilização da entidade Evento como DTO.
    /// </summary>
    public class EventoDto
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O Campo {0} é Obrigatório!")]
        [StringLength(100, MinimumLength = 3, ErrorMessage = "O Local é entre 3 e 100 Caracteres!")]
        public string Local { get; set; }
        public DateTime DataEvento { get; set; }

        [Required(ErrorMessage = "O Campo {0} é Obrigatório!")]
        public string Tema { get; set; }

        [Range(2, 120000, ErrorMessage = "Quantidade de Pessoas é entre 2 e 12000!")]
        public int QtdPessoas { get; set; }
        public string ImagemURL { get; set; }

        [Phone]
        public string Telefone { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public List<LoteDto> Lotes { get; set; }
        public List<RedeSocialDto> RedesSociais { get; set; }
        public List<PalestranteDto> Palestrantes { get; set; }
    }
}
