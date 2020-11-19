using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos
{
    /// <summary>
    /// Classe responsável pela utilização da entidade RedeSocialDto como DTO.
    /// </summary>
    public class RedeSocialDto
    {
        public int Id { get; set; }
        
        [Required (ErrorMessage="O Campo {0} é Obrigatório!")]
        public string Nome { get; set; }
        
        [Required (ErrorMessage="O Campo {0} é Obrigatório!")]
        public string URL { get; set; }
    }
}