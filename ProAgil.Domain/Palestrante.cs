using System.Collections.Generic;

namespace ProAgil.Domain
{
    /// <summary>
    /// Classe responsável pela atribuição das propriedades da entidade Palestrante.
    /// </summary>
    public class Palestrante
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string MiniCurriculo { get; set; }
        public string ImagemURL { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public List<RedeSocial> RedesSociais { get; set; }
        public List<PalestranteEvento> PalestranteEventos { get; set; }
    }
}