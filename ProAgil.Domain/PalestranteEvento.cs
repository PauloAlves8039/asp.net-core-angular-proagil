namespace ProAgil.Domain
{
    /// <summary>
    /// Classe responsável pela atribuição das propriedades da entidade PalestranteEvento.
    /// </summary>
    public class PalestranteEvento
    {
        public int PalestranteId { get; set; }

        public Palestrante Palestrante { get; set; }
        public int EventoId { get; set; }
        public Evento Evento { get; set; }
    }
}