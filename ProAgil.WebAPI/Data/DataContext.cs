using Microsoft.EntityFrameworkCore;
using ProAgil.WebAPI.Model;

namespace ProAgil.WebAPI.Data
{
    /// <summary>
    /// Classe responsável pelas configurações das entidades da aplicação no banco de dados.
    /// </summary>
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options)
        {
            
        }

        public DbSet<Evento> Eventos { get; set; }
    }
}