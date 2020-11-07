namespace ProAgil.WebAPI.Dtos
{
    /// <summary>
    /// Classe responsável pela utilização da entidade LoteDto como DTO.
    /// </summary>
    public class LoteDto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }
        public string DataInicio { get; set; }
        public string DataFim { get; set; }
        public int quantidade { get; set; }
        public EventoDto Evento { get; set; }
    }
}