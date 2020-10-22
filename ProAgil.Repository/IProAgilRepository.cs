using System.Threading.Tasks;
using ProAgil.Domain;

namespace ProAgil.Repository
{
    /// <summary>
    /// Interface com métodos genéricos para regra de negócio.
    /// </summary>
    public interface IProAgilRepository
    {
        // ***** GERAL *****
        /// <summary>
        /// Método para adicionar registro.
        /// </summary>
        /// <typeparam name="T">Recebe o tipo da entidade.</typeparam>
        void Add<T>(T entity) where T : class;

        /// <summary>
        /// Método para atualizar registro.
        /// </summary>
        /// <typeparam name="T">Recebe o tipo da entidade.</typeparam>
        void Update<T>(T entity) where T: class;

        /// <summary>
        /// Método para exlcuir registro.
        /// </summary>
        /// <typeparam name="T">Recebe o tipo da entidade.</typeparam>
        void Delete<T>(T entity) where T: class;

        /// <summary>
        /// Método para salvar registros
        /// </summary>
        /// <returns>Registro salvo</returns>
        Task<bool> SaveChangesAsync();

        // ***** EVENTOS *****
        /// <summary>
        /// Método para listagem de eventos por tema.
        /// </summary>
        /// <param name="tema">Parâmetro de definição do tema.</param>
        /// <param name="includePalestrantes">Parâmetro de adição de palestrantes.</param>
        /// <returns>Lista de eventos por tema.</returns>
        Task<Evento[]> GetAllEventoAsyncByTema(string tema, bool includePalestrantes);

        /// <summary>
        /// Método para listagem de todos eventos.
        /// </summary>
        /// <returns>Lista de todos os eventos.</returns>
        Task<Evento[]> GetAllEventoAsync(bool includePalestrantes);

        /// <summary>
        /// Método para pesquisar evento por id.
        /// </summary>
        /// <param name="EventoId">Parâmetro de pesquisa do evento</param>
        /// <param name="includePalestrantes">Parâmetro de adição de palestrantes.</param>
        /// <returns>Registro de evento por id.</returns>
        Task<Evento> GetEventoAsyncById(int EventoId, bool includePalestrantes);

        // ***** PALESTRANTES *****
        /// <summary>
        /// Método para listagem de palestrantes por nome.
        /// </summary>
        /// <returns>Lista de palestrantes por nome.</returns>
        Task<Evento[]> GetAllPalestranteAsyncByName(string name, bool includeEventos);

        /// <summary>
        /// Método para pesquisar palestrante por id.
        /// </summary>
        /// <param name="PalestranteId">Parâmetro de pesquisa do palestrante</param>
        /// <param name="includePalestrantes">Parâmetro de adição de palestrantes.</param>
        /// <returns>Registro de palestrante por id.</returns>
        Task<Evento> GetPalestranteAsyncById(int PalestranteId, bool includePalestrantes);        

    }
}