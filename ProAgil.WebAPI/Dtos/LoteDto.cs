using System;
using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos
{
    /// <summary>
    /// Classe responsável pela utilização da entidade LoteDto como DTO.
    /// </summary>
    public class LoteDto
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O Campo {0} é Obrigatório!")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O Campo {0} é Obrigatório!")]
        public decimal Preco { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }

        [Range(5, 120000)]
        public int quantidade { get; set; }
    }
}
