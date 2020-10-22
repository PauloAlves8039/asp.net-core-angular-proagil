using System.Threading.Tasks;
using ProAgil.Domain;

namespace ProAgil.Repository
{
    /// <summary>
    /// Classe de repositório responsável pela implementação de métodos referentes a regra de negócio da aplicação.
    /// </summary>
    public class ProAgilRepository : IProAgilRepository
    {
        private readonly ProAgilContext _context;

        public ProAgilRepository(ProAgilContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public Task<Evento[]> GetAllEventoAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<Evento[]> GetAllEventoAsyncByTema(string tema, bool includePalestrantes)
        {
            throw new System.NotImplementedException();
        }

        public Task<Evento> GetEventoAsyncById(int EventoId, bool includePalestrantes)
        {
            throw new System.NotImplementedException();
        }

        public Task<Evento> GetPalestranteAsyncById(int PalestranteId, bool includePalestrantes)
        {
            throw new System.NotImplementedException();
        }

        public Task<Evento[]> GetAllPalestranteAsyncByName()
        {
            throw new System.NotImplementedException();
        }
    }
}